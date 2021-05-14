import {baseUrl} from "../api";

export const sendNewArticle = async ({title,shortDescription,textarea},tags) => {
  await fetch(`${baseUrl}/articles`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(
      {
        "article": {
          "title": title,
          "description": shortDescription,
          "body": textarea,
          "tagList": tags.map(item => item.val)
        }
      })
  })
}


export const sendUpdateArticle = async ({title,shortDescription,textarea},tags, slug) => {
  await fetch(`${baseUrl}/articles/${slug}`,{
    method:"PUT",
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Token ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(
      {
        "article": {
          "slug": slug,
          "title": title,
          "description": shortDescription,
          "body": textarea,
          "tagList": tags.map(item => item.val)
        }
      })
  })
}