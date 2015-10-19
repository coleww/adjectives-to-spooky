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



	v = v.replace(/\bBarack Obama\b/gi, "Elvis Presley");
	v = v.replace(/\bObama/gi, "Presley");
	v = v.replace(/\bBarack\b/gi, "Elvis");

	v = v.replace(/\bHillary Clinton\b/gi, "Barbara Streisand");
	v = v.replace(/\bHillary\b/gi, "Babs");
	v = v.replace(/\bClinton/gi, "Streisand");

	v = v.replace(/\bJoe Biden\b/gi, "Johnny Cash");
	v = v.replace(/\bJoe\b/gi, "The Man In Black");
	v = v.replace(/\bBiden/gi, "Cash Money Records");

	v = v.replace(/\bBernie Sanders\b/gi, "Jerry Garcia");
	v = v.replace(/\bBernie\b/gi, "Jerry");
	v = v.replace(/\bSanders/gi, "Garcia");

	v = v.replace(/\bDonald Trump\b/gi, "Phil Spector");
	v = v.replace(/\bTrump/gi, "Spector");
	v = v.replace(/\bDonald\b/gi, "Phil");

	v = v.replace(/\bJeb Bush\b/gi, "Puff Daddy");
	v = v.replace(/\bJeb\b/gi, "P Diddy");
	v = v.replace(/\bBush/gi, "Diddy");

	v = v.replace(/\bRand Paul\b/gi, "Gene Simmons");
	v = v.replace(/\bRand\b/gi, "Gene");
	v = v.replace(/\bPaul/gi, "Simmons");

	v = v.replace(/\bBen Carson\b/gi, "Raffi");
	v = v.replace(/\bCarson/gi, "Raffi");

	v = v.replace(/\bMarco Rubio\b/gi, "Milli Vanilli");
	v = v.replace(/\bRubio/gi, "Milli Vanilli");

	v = v.replace(/\bMike Huckabee\b/gi, "Taylor Swift");
	v = v.replace(/\bHuckabee/gi, "Taylor");

	v = v.replace(/\bTed Cruz\b/gi, "Vanilla Ice");
	v = v.replace(/\bCruz/gi, "Ice");

	v = v.replace(/\bGingrich\b/gi, "Suge Knight");



	v = v.replace(/email/gi, ""); // DELETE THE EMAILS!
	v = v.replace(/\bDemocratic/gi, "Juggalo");
	v = v.replace(/\bSocialism/gi, "the one true path");
v = v.replace(/\bpolitic/gi, "pyrotechnic");
v = v.replace(/\brevolutiona/gi, "fog machine");
v = v.replace(/\bmayor/gi, "tiny dancer");
v = v.replace(/\bcountry\b/gi, "supergroup");
v = v.replace(/\btax/gi, "guitar solo");
v = v.replace(/\brevolution/gi, "fog machine");
	v = v.replace(/\bDemocrat/gi, "Juggalo");
	v = v.replace(/\bRepublican/gi, "Metalhead");
	v = v.replace(/\bSocialist/gi, "Deadhead");
	v = v.replace(/\bIndependent/gi, "Jazz Enthusiast");
	v = v.replace(/\bstate\b/gi, "Disco");
	v = v.replace(/\bsecret service\b/gi, "backup dancers");
	v = v.replace(/\bcaucus\b/gi, "jam session");
	v = v.replace(/\bgovernor\b/gi, "lead guitarist");
	v = v.replace(/\bsenator\b/gi, "bass player");
	v = v.replace(/\bdiplomat\b/gi, "guitar player");
	v = v.replace(/\bbenghazi\b/gi, "Woodstock");
	v = v.replace(/\bpoll/gi, "sing");
	v = v.replace(/\bcampaign/gi, "perform");
	v = v.replace(/\badminist/gi, "danc");
	v = v.replace(/\bsupport\b/gi, "sing backup vocals for");
	v = v.replace(/\bsupporting\b/gi, "opening up the concert for");
	v = v.replace(/\bstump/gi, "tree");
	v = v.replace(/\bimmigra/gi, "medita");

	textNode.nodeValue = v;
}


