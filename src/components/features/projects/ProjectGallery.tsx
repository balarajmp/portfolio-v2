import React from "react";
import Image from "next/image";
import { Image as ImageIcon, Layers, Cpu, Activity } from "lucide-react";
import type { Media } from "@/types";

export interface ProjectGalleryProps {
  readonly title: string;
  readonly gallery?: ReadonlyArray<Media>;
  readonly className?: string;
}

/**
 * ProjectGallery Component
 * Media gallery & screenshot showcase. Features fallback preview frames if assets are pending.
 */
export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  title,
  gallery,
  className = "",
}) => {
  const hasGallery = gallery && gallery.length > 0;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-1.5 text-xs font-mono text-fg-muted uppercase tracking-wider">
        <ImageIcon className="h-3.5 w-3.5 text-accent-hover" aria-hidden="true" />
        <span>Architecture & Interface Gallery</span>
      </div>

      {hasGallery ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {gallery.map((media, idx) => (
            <div
              key={idx}
              className="relative aspect-video rounded-xl bg-bg-surface1 border border-border-subtle overflow-hidden group"
            >
              <Image
                src={media.src}
                alt={media.alt || `${title} preview screenshot ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-normal group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      ) : (
        /* Placeholder Screenshot Infrastructure */
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-xl bg-bg-surface1 border border-border-subtle/80 flex flex-col items-center justify-center text-center space-y-2 group hover:border-accent-primary/40 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-bg-surface2 flex items-center justify-center text-accent-hover">
              <Layers className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-mono text-fg-primary font-medium">Dashboard Interface</p>
              <p className="text-[11px] text-fg-muted">Real-time metrics & control panel</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-bg-surface1 border border-border-subtle/80 flex flex-col items-center justify-center text-center space-y-2 group hover:border-accent-primary/40 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-bg-surface2 flex items-center justify-center text-accent-hover">
              <Cpu className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-mono text-fg-primary font-medium">API Pipeline Flow</p>
              <p className="text-[11px] text-fg-muted">Asynchronous event processing</p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-bg-surface1 border border-border-subtle/80 flex flex-col items-center justify-center text-center space-y-2 group hover:border-accent-primary/40 transition-colors">
            <div className="h-10 w-10 rounded-lg bg-bg-surface2 flex items-center justify-center text-accent-hover">
              <Activity className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-mono text-fg-primary font-medium">Telemetry Log</p>
              <p className="text-[11px] text-fg-muted">Auditing & performance benchmarks</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
