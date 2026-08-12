/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const MLHBadge = () => (
  <Link
    href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=red"
    id="mlh-trust-badge"
    target="_blank"
    style={{
      display: 'block',
      maxWidth: '100px',
      minWidth: '60px',
      position: 'fixed',
      right: '50px',
      top: 0,
      width: '10%',
      zIndex: 10000,
    }}
  >
    <img
      alt="Major League Hacking 2026 Hackathon Season"
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-red.svg"
      width={100}
      style={{
 width: '100%' 
}}
    />
  </Link>
)

export { MLHBadge }
