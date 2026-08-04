import data from '../data/website.json'
import { useSeo } from '../hooks/useSeo'
import { SiteLayout } from '../layouts/SiteLayout'
import { Accordion, CardGrid, Contact, Hero, Industries, Insights, Intro, TabbedTraffic, TrafficScale, Technology, Testimonials } from '../components/Sections'
import type { SiteData } from '../types'
const site = data as SiteData
export function HomePage() { useSeo(site.seo); return <SiteLayout data={site}><Hero data={site.hero} ambient={site.ambient}/><Intro data={site.intro}/><CardGrid data={site.services}/><CardGrid data={site.traffic}/><TabbedTraffic data={site.trafficPrograms}/><TrafficScale data={site.trafficScale}/><Industries data={site.industries}/><Technology data={site.technology}/><CardGrid data={site.process}/><CardGrid data={site.partners}/><CardGrid data={site.principles}/><Accordion data={site.faqs}/><Insights data={site.insights}/><Testimonials data={site.testimonials}/><Contact data={site.contact}/></SiteLayout> }
