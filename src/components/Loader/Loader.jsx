import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css"

export default function Loader() {
    return (
        <div className={css.loader }>
            <Rings
          visible={true}
          height="100"
          width="100"
          color="#144b6f"
          ariaLabel="rings-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        </div>
    )
}


