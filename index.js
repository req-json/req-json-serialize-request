export default function serializeRequest(ctx) {
  return `${ctx.method}${ctx.url}${
    ctx.header ? JSON.stringify(ctx.header) : ''
  }${
    ctx.data ? JSON.stringify(ctx.data) : ''
  }`;
}
