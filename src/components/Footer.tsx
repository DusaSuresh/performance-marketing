import type { Link, SiteData } from '../types'
interface Props { brand: SiteData['brand']; groups: { title: string; links: Link[] }[]; legal: string }
export function Footer({ brand, groups, legal }: Props) { return <footer><div className="container footer-top"><a href="#home" className="brand"><span>{brand.mark}</span>{brand.name}</a>{groups.map(group => <div className="footer-group" key={group.title}><p>{group.title}</p>{group.links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}</div>)}</div><div className="container legal">{legal}</div></footer> }
