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
	var v = textNode.nodeValue;

	v = v.replace(/\bHillary\b/gi, "");
	v = v.replace(/\bClinton\b/gi, "");
	v = v.replace(/\bBernie\b/gi, "");
	v = v.replace(/\bSanders\b/gi, "");
	v = v.replace(/\bTrump\b/gi, "");
	v = v.replace(/\bDonald\b/gi, "");
	v = v.replace(/\bJeb\b/gi, "");
	v = v.replace(/\bBush\b/gi, "");
	v = v.replace(/\bObama\b/gi, "");
	v = v.replace(/\bBen Carson\b/gi, "");
	v = v.replace(/\bMarco Rubio\b/gi, "");
	v = v.replace(/\bTed Cruz\b/gi, "");
	v = v.replace(/\bCarson\b/gi, "");
	v = v.replace(/\bRubio\b/gi, "");
	v = v.replace(/\bCruz\b/gi, "");





	v = v.replace(/\bpoll/gi, "");
	v = v.replace(/\bcampaign/gi, "");
	v = v.replace(/\badminist/gi, "");
	v = v.replace(/\bsupport/gi, "");
	v = v.replace(/\bendorse/gi, "");
	v = v.replace(/\bstump/gi, "");
	v = v.replace(/\bcampaign/gi, "");
	v = v.replace(/\badminist=/gi, "");
	v = v.replace(/\bsupport/gi, "");
	v = v.replace(/\bendorse/gi, "");

	textNode.nodeValue = v;
}


