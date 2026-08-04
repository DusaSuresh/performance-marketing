import type { SectionBase } from '../types'
export function SectionHeading({ eyebrow, title, description }: Pick<SectionBase, 'eyebrow' | 'title' | 'description'>) { return <div className="section-heading"><p className="eyebrow">{eyebrow}</p>{title && <h2>{title}</h2>}{description && <p className="section-copy">{description}</p>}</div> }
