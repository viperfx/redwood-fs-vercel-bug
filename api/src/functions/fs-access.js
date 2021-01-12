import * as nunjucks from "nunjucks"

const env = nunjucks.configure('src/templates')

export const handler = async (event, context) => {
  var res = env.render("index.njk")
  return {
    statusCode: 200,
    body: res
  }
}
