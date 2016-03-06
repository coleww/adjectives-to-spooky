
walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	textNode.nodeValue = textNode.nodeValue.split(' ').map(function (w) {
            var word
		switch (w) {
                  case 'vote':
                        word = 'vore'
                        break;
                  case 'voter':
                        word = 'vorer'
                        break;
                  case 'votes':
                        word = 'vores'
                        break;
                  case 'voters':
                        word = 'vorers'
                        break;
                  case 'voting':
                        word = 'voring'
                        break;
                  case 'voted':
                        word = 'vored'
                        break;
                  default:
                        word = w
                        break;
            }
            return word
	}).join(' ')
}
