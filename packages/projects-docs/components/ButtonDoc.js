export default function ButtonDoc({ type, title, description, cta, link }) {
  return (
    <a className="container callout" href={link}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="button">{cta}</div>

      <style jsx>{` 
        .container { 
            
            padding: 28px;
            overflow: hidden;
            position: relative;
            transition: background 300ms;
        }
        
        h4 { 
            padding: 0;
            margin: 0;
            font-weight: 400;
            margin-bottom: 6px;
            font-size: 1.3rem;
        }
        
        p { 
            font-size: 1.1rem;
            letter-spacing: -0.006rem;
            margin: 0 0 1.8rem 0;
            padding: 0;
            padding-bottom: 24px;
        }
        
        .button { 
            border:none;
            position:absolute;
            bottom: 24px;
            display: inline-block;
            font-size: 1rem;
            height: 36px;
            line-height: 36px;
            color: var(--docs-accent-color);
        }
        
        .button:hover {    
            opacity: 0.9
        }
        
        



      `}</style>
    </a>
  );
}
