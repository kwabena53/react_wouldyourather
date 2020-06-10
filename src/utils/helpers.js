

  
  export const formatString = (question) =>{
      if(question.length > 13){
          return (question.substr(0, 12)+ "...")
      } else {
          return question+"..."
      }
  }

  export const formatQuestionData = (users, question, type) =>{
      const {author, id, optionOne} = question
      
    return{
        id: id,
        text: formatString(optionOne.text),
        author: users[author].name,
        authorImage: users[author].avatarURL,
        type: type
    }
        
    
}