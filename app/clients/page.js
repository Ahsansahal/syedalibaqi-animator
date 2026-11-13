import ProGallery from "@/components/ProGallery";
import Reveal from "@/components/Reveal";
import galleries from "@/data/galleries";
import { clients } from "@/data/site";

export const metadata = { title: "Clients" };

export default function ClientsPage() {
  return (
    <>
      <section className="mx-auto max-w-[980px] px-4 pt-10 pb-12 text-center sm:px-6 sm:pt-16 sm:pb-20">
        <Reveal as="h1" className="font-display text-[clamp(1.85rem,7.2vw,98px)] leading-[0.95] tracking-[-0.04em] wrap-break-word">
          {clients.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </Reveal>
      </section>
      <section className="mx-auto max-w-[1628px] px-4 pb-16 sm:px-6 md:px-16">
        <ProGallery items={galleries.clients} layout="grid" columns={5} gap={48} ratio="1 / 1" showInfo="hover" lightbox={false} />
      </section>
    </>
  );
}
