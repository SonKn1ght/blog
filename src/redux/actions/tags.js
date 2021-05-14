

export const addTag = (tag) => {
  return {
    type: "ADD/INPUT",
    payload:tag
  }
}

export const addAllTag = (tagList) => {
  return {
    type: "ADD/ALL",
    payload:tagList
  }
}


export const removeTag = (tag) => {
  return {
    type:"DELETE/INPUT",
    payload:tag.id
  }
}

export const removeAllTag = () => {
  return {
    type: "REMOVE/ALL"
  }
}
