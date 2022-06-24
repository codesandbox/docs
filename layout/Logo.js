export default function Logo({ children }) {
  return (
    <div style={{ display: "flex", gap: "1.3rem" }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 3.07224e-07L23.9866 0V24H0V3.07224e-07ZM21.5334 2.45455V21.5455H2.45317V2.45455H21.5334Z"
          fill="white"
        />
      </svg>
      {children}
    </div>
  );
}
