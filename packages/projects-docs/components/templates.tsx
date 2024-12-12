import React, { useEffect, useState } from "react";

const TEMPLATES_URL =
  "https://raw.githubusercontent.com/codesandbox/sandbox-templates/refs/heads/main/templates.json";

export const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      const templates = await fetch(TEMPLATES_URL).then((res) => res.json());
      setTemplates(templates);
    };
    fetchTemplates();
  }, []);
  console.log(templates);

  const handleCopyClick = async (id: string) => {
    await navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="templates-list">
      {templates.map((template) => (
        <div key={template.id} className="template-item">
          <img
            src={template.iconUrl}
            alt={`${template.title} icon`}
            className="template-icon"
          />
          <div className="template-content">
            <div className="template-header">
              <a href={template.editorUrl} className="template-title">
                {template.title}
              </a>
              <button
                onClick={() => handleCopyClick(template.id)}
                className="template-id"
              >
                {copiedId === template.id ? "Copied!" : template.id}
              </button>
            </div>
            {template.description && (
              <span className="template-description">
                {template.description}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
