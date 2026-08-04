import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { Link, SiteData } from '../types'
interface Props { brand: SiteData['brand']; menu: Link[]; cta: Link }
export function Navbar({ brand, menu, cta }: Props) { const [open, setOpen] = useState(false); return <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation"><a href="#home" className="brand"><span>{brand.mark}</span>{brand.name}</a><div className={open ? 'nav-links open' : 'nav-links'}>{menu.map(item => <a onClick={() => setOpen(false)} href={item.href} key={item.href}>{item.label}</a>)}<a className="button nav-cta" href={cta.href}>{cta.label}</a></div><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></nav></header> }
