// JsDoc
/**
 * 입력한선택자에 해당하는 DOM 요소를 반환합니다.
 *
 * @param {string} node - CSS 선택자 문자열 (ex: '.class','#id','div')
 * @param {Document | HTMLElement} context - 부모가될 컨텍스트 노드 (기본값은 document입니다.)
 * @returns {HTMLElement | null} - 매칭된 첫 번째 요소 또는 null일수 있습니다.
 *
 * @example
 * const btn = getNode('#button');
 * const li = getNode('li','navigation');
 */

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
