/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const MLHBadge = () => (
  <Link
    id="mlh-trust-badge"
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
    href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=red"
    target="_blank"
  >
    <img
      src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-red.svg"
      alt="Major League Hacking 2026 Hackathon Season"
      width={100}
      style={{ width: '100%' }}
    />
  </Link>
)

export { MLHBadge }
