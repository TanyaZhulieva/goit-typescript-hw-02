import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return <p className={css.error}>Error while fetching images from Unsplash!</p>
}