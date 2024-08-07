import Header_Articles from "../../components/sections/section_Articles/Header_Articles"
import Item_Articles from "../../components/sections/section_Articles/Item_Articles"
import './articles.css'
const Articles = () => {
    return <>
        <section className="articles">
            <Header_Articles />
            <Item_Articles />
        </section>

    </>
}

export default Articles