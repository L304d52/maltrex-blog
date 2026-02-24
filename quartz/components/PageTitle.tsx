// import { pathToRoot } from "../util/path"
// import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import { classNames } from "../util/lang"
// import { i18n } from "../i18n"

// const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
//   const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
//   const baseDir = pathToRoot(fileData.slug!)
//   return (
//     <h2 class={classNames(displayClass, "page-title")}>
//       <a href={baseDir}>{title}</a>
//     </h2>
//   )
// }

// PageTitle.css = `
// .page-title {
//   font-size: 1.75rem;
//   margin: 0;
//   font-family: var(--titleFont);
// }
// `

// export default (() => PageTitle) satisfies QuartzComponentConstructor

import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <div class={classNames(displayClass, "page-title-wrapper")}>
      <img src={`${baseDir}/static/avatar.jpg`} class="site-avatar" alt="avatar" />
      <h2 class="page-title">
        <a href={baseDir}>{title}</a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.site-avatar {
  width: 201px !important;
  height: 201px !important;
  border-radius: 25px;
  object-fit: cover;
  margin: 0 !important;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor