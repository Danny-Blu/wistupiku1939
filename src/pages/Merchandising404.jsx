import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, PackageOpen, Sparkles } from 'lucide-react';

/** Ruta deliberadamente fallida para mostrar el tratamiento de un error 404 de la marca. */
export default function Merchandising404() {
  const navigate = useNavigate();
  return (
    <section className="merch-error-page" aria-labelledby="merch-error-title">
      <div className="merch-error-glow" aria-hidden="true" />
      <div className="merch-error-shell">
        <div className="merch-error-copy">
          <p className="merch-error-eyebrow"><span className="merch-error-pulse" aria-hidden="true" /> ERROR 404 <span aria-hidden="true">/</span> MERCHANDISING</p>
          <h1 id="merch-error-title">ESTA PÁGINA<br/><em>SE NOS FUE</em><br/>DEL HORNO.</h1>
          <p className="merch-error-desc">Uy, llegaste a Merchandising, pero no encontramos esta página. Por ahora, este rincón está fuera de servicio. Los buenos sabores, por suerte, siguen en el menú.</p>
          <div className="merch-error-actions">
            <Link className="merch-error-primary" to="/">VOLVER AL INICIO <ArrowUpRight size={19}/></Link>
            <Link className="merch-error-secondary" to="/menu">EXPLORAR EL MENÚ <ArrowUpRight size={18}/></Link>
          </div>
          <button type="button" className="merch-error-back" onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}><ArrowLeft size={16}/> Ir a la página anterior</button>
        </div>
        <div className="merch-error-art" aria-hidden="true">
          <div className="merch-error-art-top"><span>WIST'UPIKU / 1939</span><Sparkles size={21}/></div>
          <span className="merch-error-giant-number">404</span>
          <div className="merch-error-art-orbit"><div className="merch-error-symbol"><PackageOpen size={72} strokeWidth={1.35}/></div></div>
          <div className="merch-error-art-bottom"><span>ERROR DE NAVEGACIÓN</span><span>NO SE ENCUENTRA LA COLECCIÓN ↗</span></div>
        </div>
      </div>
      <p className="merch-error-footnote">UN DESVÍO PEQUEÑO EN UNA HISTORIA QUE CONTINÚA DESDE 1939.</p>
    </section>
  );
}
