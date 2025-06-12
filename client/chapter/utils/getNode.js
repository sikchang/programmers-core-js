function getNode(node, context = document) {
  // document가 아니면 아래 if문 실행
  //   if (context.nodeType !== 9) context = document.querySelector(context);
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelector(node);
}

function getNodes(node, context = document) {
  // document가 아니면 아래 if문 실행
  //   if (context.nodeType !== 9) context = document.querySelector(context);
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelectorAll(node);
}
