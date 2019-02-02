export default function serializeRequest(ctx) {
  return `${ctx.method}${ctx.url}${JSON.stringify(ctx.header)}${
    ctx.data ? JSON.stringify(ctx.data) : ''
  }`;
}
