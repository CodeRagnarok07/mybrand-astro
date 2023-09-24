
import { Client } from '@notionhq/client';




const auth_token = import.meta.env.NEXT_NOTION_TOKEN
const dbId = import.meta.env.NEXT_ARTICLES_DB_ID


const getSkills = async (req, res) => {
    const query = {
        filter: {
            "property": "Main",
            "checkbox": { "equals": true }
        }
    }

    const notion = new Client({ auth: auth_token, })

    const database = await notion.databases.query({
        database_id: dbId,
        filter: query?.filter,
        sorts: query?.sorts,
    })


    const fields_DB = Object.keys(database.results[0].properties)
    const list = database.results.map((v, k) => {
        let element = {}
        for (let index = 0; index < fields_DB.length; index++) {
            const field = fields_DB[index];
            const item = v.properties[field][v.properties[field].type]
            element[field] = item


            // if(field == "parent_articles"){
            //     console.log(item);
            // }
        }
        // console.log(v.id);
        element["id"] = v.id
        element["icon"] = v.icon?.file?.url
        // console.log(v);

        return element
    });

    return list
    // return res.status(200).json(list)
}

export default getSkills