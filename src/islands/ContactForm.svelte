<script lang="ts">
  /* Svelte island. Fields follow the mirror's form (nombre, apellido, empresa,
     cargo, correo, teléfono, servicio). There is no backend yet, so after
     validating it hands off to a mailto: — honest, and visible to the user. */
  let { email, services = [] } = $props<{ email: string; services?: string[] }>();

  type Field = "nombre" | "apellido" | "empresa" | "cargo" | "correo" | "telefono" | "servicio" | "mensaje";
  const required: Field[] = ["nombre", "apellido", "correo", "telefono"];

  let values = $state<Record<Field, string>>({
    nombre: "", apellido: "", empresa: "", cargo: "", correo: "", telefono: "", servicio: "", mensaje: "",
  });
  let errors = $state<Partial<Record<Field, string>>>({});
  let status = $state("");

  function validate(f: Field): string {
    const v = values[f].trim();
    if (required.includes(f) && !v) return "Este campo es obligatorio.";
    if (f === "correo" && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return "Revise el formato del correo.";
    if (f === "telefono" && v && v.replace(/\D/g, "").length < 10) return "Escriba un teléfono de al menos 10 dígitos.";
    return "";
  }

  function check(f: Field) {
    const msg = validate(f);
    if (msg) errors[f] = msg;
    else delete errors[f];
  }

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    for (const f of Object.keys(values) as Field[]) {
      const msg = validate(f);
      if (msg) next[f] = msg;
    }
    errors = next;
    const first = Object.keys(next)[0];
    if (first) {
      status = "Revise los campos marcados.";
      document.getElementById(`f-${first}`)?.focus();
      return;
    }

    const body = [
      `Nombre: ${values.nombre} ${values.apellido}`,
      `Empresa: ${values.empresa || "—"}`,
      `Cargo: ${values.cargo || "—"}`,
      `Correo: ${values.correo}`,
      `Teléfono: ${values.telefono}`,
      `Servicio de interés: ${values.servicio || "—"}`,
      "",
      values.mensaje,
    ].join("\n");

    status = "Abriendo su cliente de correo…";
    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent("Contacto desde comerzia.mx")}` +
      `&body=${encodeURIComponent(body)}`;
  }
</script>

{#snippet input(f: Field, label: string, type = "text", autocomplete = "off")}
  <label class="field">
    <span class="field__label">{label}{#if required.includes(f)} <em aria-hidden="true">*</em>{/if}</span>
    <input
      id={`f-${f}`} name={f} {type} {autocomplete}
      required={required.includes(f)}
      bind:value={values[f]}
      onblur={() => check(f)}
      aria-invalid={!!errors[f]}
      aria-describedby={errors[f] ? `e-${f}` : undefined}
    />
    {#if errors[f]}<span class="field__error" id={`e-${f}`}>{errors[f]}</span>{/if}
  </label>
{/snippet}

<form class="cform" onsubmit={onSubmit} novalidate>
  <div class="cform__row">
    {@render input("nombre", "Nombre", "text", "given-name")}
    {@render input("apellido", "Apellido", "text", "family-name")}
  </div>
  <div class="cform__row">
    {@render input("empresa", "Empresa", "text", "organization")}
    {@render input("cargo", "Cargo", "text", "organization-title")}
  </div>
  <div class="cform__row">
    {@render input("correo", "Correo", "email", "email")}
    {@render input("telefono", "Teléfono", "tel", "tel")}
  </div>

  <label class="field">
    <span class="field__label">Servicio de interés</span>
    <select id="f-servicio" name="servicio" bind:value={values.servicio}>
      <option value="">Seleccione una opción</option>
      {#each services as s}<option value={s}>{s}</option>{/each}
    </select>
  </label>

  <label class="field">
    <span class="field__label">¿Qué vende y a qué mercado quiere llegar?</span>
    <textarea id="f-mensaje" name="mensaje" rows="4" bind:value={values.mensaje}></textarea>
  </label>

  <div class="cform__foot">
    <button class="btn btn--forest" type="submit">
      Enviar
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
    </button>
    <p class="cform__status small" role="status" aria-live="polite">{status}</p>
  </div>
  <p class="small muted cform__note"><em aria-hidden="true">*</em> Campos obligatorios. Al enviar se abrirá su programa de correo con el mensaje listo.</p>
</form>

<style>
  .cform { display: grid; gap: var(--space-m); }
  .cform__row { display: grid; gap: var(--space-m); }
  @media (min-width: 640px) { .cform__row { grid-template-columns: 1fr 1fr; } }

  .field { display: grid; gap: 0.4rem; }
  .field__label { font-size: var(--step--1); font-weight: 700; }
  em { font-style: normal; color: var(--accent-text); }

  input, select, textarea {
    width: 100%;
    min-height: 48px;
    padding: 0.7rem 0.9rem;
    background: var(--bg);
    border: 1.5px solid var(--border-strong);
    border-radius: var(--radius-s);
    transition: border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
  }
  textarea { resize: vertical; min-height: 120px; }
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--forest);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--lime) 55%, transparent);
  }
  [aria-invalid="true"] { border-color: #b3261e; }
  .field__error { font-size: var(--step--1); color: #b3261e; }
  :global(:root[data-theme="dark"]) .field__error { color: #ffb4ab; }
  @media (prefers-color-scheme: dark) { :global(:root:not([data-theme="light"])) .field__error { color: #ffb4ab; } }

  .cform__foot { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-m); }
  .cform__status { color: var(--text-muted); }
</style>
