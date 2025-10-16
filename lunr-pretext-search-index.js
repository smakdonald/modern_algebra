var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  smakdonald.github   copyright  "
},
{
  "id": "sec-group-basics",
  "level": "1",
  "url": "sec-group-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Group Basics",
  "body": "Group Basics     Most great learning happens in groups.   Ken Robinson    Binary Operations and the Definition of a Group     A Brief Notational Aside  At various points throughout this text, the author may use \"mathcal\" notation for definitions that do not normally require it (such as for a group, for a ring, etc.). In the realm of higher mathematics, this is what is known as a typo , and should be reported to the proper authorities as soon as possible.   We begin, as all great volumes of mathematics are like to do, somewhere in the middle. Though everything that you need from the beginning can be found in .   Binary Operation   A binary operation on a set is a   binary operation      One of the nice things about binary operations is that they have properties.   Properties of Binary Operations   Let be a binary operation on a set .   An operation satisfies the associative property if, for all , we have . associative property     An operation satisfies the identity property if there exists such that for all . Such an element is called an identity element .  identity property     An operation satisfies the inverse property if, for each , there exists an element such that , where is an identity element of . The element is called an inverse of the element . inverse property        Group   A group is a pair , where is a set and is a binary operation on satisfying the associative , identity , and inverse properties. group       Though a group is a pair, we will usually refer to the group by only naming the underlying set, .    We say that is closed under the operation when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation. This is the one and only \"Mark\". All following \"Marks\" will be \"Remarks\".     First Properties of Groups  Properties of Groups   Let be a group.  Unique Identity  The element satisfying the identity property is unique, and we thus refer to it as the identity element of . identity element (of a group)    Unique Inverses  For each , the element satisfying inverse property is unique, and we thus refer to it as the inverse of . inverse element    Cancellation  Suppose . If , then .  Similarly, if , then  cancellation (in groups)           Suppose there exist two elements, and , such that, for all , we have and . As is an identity element, by definition we have . Similarly, as is an identity element, we have . Combining these two equations, we see Thus , making the identity element unique.    Suppose an element has two inverses: and . Thus and . Observe Thus , making inverses unique.    Suppose for some . By the inverse property , has an inverse, such that . Observe         The inverse of an element is often written , for reasons we will see in the next section.    Abelian Groups  Additionally, a binary operation can be commutative .  Commutative Property   An operation satisfies the commutative property if for all . commutative property     It is perhaps natural at this stage to wonder about groups whose binary operation satisfies the commutative property. Some sort of commutative group , if you will. Surely such groups will be named accordingly. Right?  Abelian Group   An abelian group is a group that also satisfies commutative property. abelian group     Additive vs. Multiplicative Notation  When working with arbitrary groups, multiplicative notation is often used as the operation. Thus, groups are commonly written as and referred to as multiplicative groups . However, when working with abelian groups, it is customary to use additive notation, writing the group as . Often, the letter is used in place of when referring to abelian groups.    First Examples of Groups  All right. We've spent enough time wading around in the vagaries of abstraction. It's time to get our hands on some of these groups and see what all the fuss is about.  Group Examples      The trivial group is the group with a single element . trivial group       and each form an abelian group, where denotes traditional addition. The axioms of arithmetic guarantee the validity of the group axioms as well as the commutativity of the group operation. Thus all four groups are abelian.    For any positive integer , let Then is a non-abelian group under matrix multiplication known as the general linear group . general linear group      For any , let denote the . Then forms an abelian group where denotes addition modulo .    The quaternion group quaternion group  is a set with elements satisfying the following relations: is the identity element,         Specific General Linear Groups  In general, is a group for any field (whatever those are). To jump ahead and discover what those are, see: .    Identity Theft  In familiar groups of numbers, is used for the identity element of a multiplicative group (and likewise in additive groups). Often, is used for the identity element in arbitrary groups, though we will not do so here.   Not Quite Groups     The natural numbers do not form a group with respect to addition (as its underlying operation).    The rational numbers do not form a group with respect to multiplication.       Groups of Units  The following example illustrates a few important examples of something called a , which is defined explicitely in terms of rings (whatever those are) in the aptly named .  Groups of Units  group of units    Each of the following subsets form an abelian group under multiplication.   The subset of .     , , and .    For each , the subset of .        In latex , is written using \\times .    Some texts use the notation to denote groups of units. For example, would be written .     will be integral to our constructions of semidirect products in and our classifications of certain groups up to isomorphism (whatever that means). Though not strictly required for this text, knowing the structure of for various can prove helpful in some niche situations (read: certain qualifying exam problems).    Prove that .    Other Initial Examples and Properties  Some Extra Groups     Let be a multiplicative group, and define the opposite group , , to be the set equipped with the operation , where . Then is a group. Opposite groups are used in category theory to describe something called duality between algebraic structures.  opposite group      Let denote the set of even integers and denote the set of odd integers. Then is a group, whereas is not.           Let be a group.  Associativity of  Let be any elements . Observe Thus, associativity is satisfied in .   Identity Element of  As is a group, it contains an identity element, . I claim that is also the identity element of . Let . Thus for all Therefore, is the identity element of .   Inverses in  Let be an element in . Since is also an element of the group , by the inverse property there exists an inverse element in such that , where is the identity element of . Consider  and  From the previous part we see that is the identity element of , making the inverse of in . Thus every element in has an inverse in , satisfying the inverse element property.       Integer addition is associative, which means that for any three integers , and , the expression is equal to . Thus, associativity is satisfied for .  The identity element for addition is . For any even integer , adding to it does not change its parity (evenness). Hence, the identity element property is satisfied for .  For every even integer , there exists an inverse element denoted as such that . The negative of an even integer is also an even integer. Adding an even integer to its negative results in , which is the identity element. Therefore, the inverse element property is satisfied for .  The identity element for addition is . However, is not an odd integer, so the identity element property is not satisfied for .      Properties of Inverses   If is a group and , then    and               The element is defined to be the inverse of the element . I claim that is also the inverse of .  As is the inverse of , by the inverse property we have and , making the inverse of . Thus both and are inverses of the element . As inverses are unique , we see .    The element is defined to be the inverse of the element . I claim that is also the inverse of . Observe and Thus both and are inverses of , making them equal as inverses are unique .       The second portion of can be generalized.  Big 'Ole Inverses  If is a group and , then .   Generalized Associative Law generalized associative law  If an element of a group is contructed from a sequence of elements in this order by repeatedly inserting parenthesis and applying the operation, the element must equal and so is independent of the mode of bracketing.   As a result of any expression formed from the elements in that order can be written without parenthesis, which will save us oodles of time down the line. This is usually a result that is simply taken for granted and left unstated; we include it here for the sake of completenes - and ~rigor~. Yes, oodles is the best word to go here and no, I will not be changing it.       A is a set equipped with a that satisfies the associative , identity , and inverse properties. An abelian group is a group that also satisfies the .    The identity and inverse elements described in are unique . For inverses, we have and . See:      and are all additive abelian groups, and form multiplicative abelian groups.     "
},
{
  "id": "subsec-groups-3-2",
  "level": "2",
  "url": "sec-group-basics.html#subsec-groups-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "typo "
},
{
  "id": "def-binop",
  "level": "2",
  "url": "sec-group-basics.html#def-binop",
  "type": "Definition",
  "number": "1.4",
  "title": "Binary Operation.",
  "body": "Binary Operation   A binary operation on a set is a   binary operation     "
},
{
  "id": "def-binary-properties",
  "level": "2",
  "url": "sec-group-basics.html#def-binary-properties",
  "type": "Definition",
  "number": "1.5",
  "title": "Properties of Binary Operations.",
  "body": "Properties of Binary Operations   Let be a binary operation on a set .   An operation satisfies the associative property if, for all , we have . associative property     An operation satisfies the identity property if there exists such that for all . Such an element is called an identity element .  identity property     An operation satisfies the inverse property if, for each , there exists an element such that , where is an identity element of . The element is called an inverse of the element . inverse property       "
},
{
  "id": "def-group",
  "level": "2",
  "url": "sec-group-basics.html#def-group",
  "type": "Definition",
  "number": "1.6",
  "title": "Group.",
  "body": "Group   A group is a pair , where is a set and is a binary operation on satisfying the associative , identity , and inverse properties. group     "
},
{
  "id": "subsec-groups-10",
  "level": "2",
  "url": "sec-group-basics.html#subsec-groups-10",
  "type": "Mark",
  "number": "1.7",
  "title": "",
  "body": " We say that is closed under the operation when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation. This is the one and only \"Mark\". All following \"Marks\" will be \"Remarks\".   "
},
{
  "id": "thm-properties-of-groups",
  "level": "2",
  "url": "sec-group-basics.html#thm-properties-of-groups",
  "type": "Theorem",
  "number": "1.8",
  "title": "Properties of Groups.",
  "body": "Properties of Groups   Let be a group.  Unique Identity  The element satisfying the identity property is unique, and we thus refer to it as the identity element of . identity element (of a group)    Unique Inverses  For each , the element satisfying inverse property is unique, and we thus refer to it as the inverse of . inverse element    Cancellation  Suppose . If , then .  Similarly, if , then  cancellation (in groups)           Suppose there exist two elements, and , such that, for all , we have and . As is an identity element, by definition we have . Similarly, as is an identity element, we have . Combining these two equations, we see Thus , making the identity element unique.    Suppose an element has two inverses: and . Thus and . Observe Thus , making inverses unique.    Suppose for some . By the inverse property , has an inverse, such that . Observe       "
},
{
  "id": "commutative-property",
  "level": "2",
  "url": "sec-group-basics.html#commutative-property",
  "type": "Definition",
  "number": "1.9",
  "title": "Commutative Property.",
  "body": "Commutative Property   An operation satisfies the commutative property if for all . commutative property    "
},
{
  "id": "def-abelian",
  "level": "2",
  "url": "sec-group-basics.html#def-abelian",
  "type": "Definition",
  "number": "1.10",
  "title": "Abelian Group.",
  "body": "Abelian Group   An abelian group is a group that also satisfies commutative property. abelian group    "
},
{
  "id": "subsec-abelian-6",
  "level": "2",
  "url": "sec-group-basics.html#subsec-abelian-6",
  "type": "Convention",
  "number": "1.11",
  "title": "Additive vs. Multiplicative Notation.",
  "body": "Additive vs. Multiplicative Notation  When working with arbitrary groups, multiplicative notation is often used as the operation. Thus, groups are commonly written as and referred to as multiplicative groups . However, when working with abelian groups, it is customary to use additive notation, writing the group as . Often, the letter is used in place of when referring to abelian groups.  "
},
{
  "id": "ex-group-examples",
  "level": "2",
  "url": "sec-group-basics.html#ex-group-examples",
  "type": "Example",
  "number": "1.12",
  "title": "Group Examples.",
  "body": "Group Examples      The trivial group is the group with a single element . trivial group       and each form an abelian group, where denotes traditional addition. The axioms of arithmetic guarantee the validity of the group axioms as well as the commutativity of the group operation. Thus all four groups are abelian.    For any positive integer , let Then is a non-abelian group under matrix multiplication known as the general linear group . general linear group      For any , let denote the . Then forms an abelian group where denotes addition modulo .    The quaternion group quaternion group  is a set with elements satisfying the following relations: is the identity element,        "
},
{
  "id": "subsec-group-ex-4",
  "level": "2",
  "url": "sec-group-basics.html#subsec-group-ex-4",
  "type": "Remark",
  "number": "1.13",
  "title": "Specific General Linear Groups.",
  "body": "Specific General Linear Groups  In general, is a group for any field (whatever those are). To jump ahead and discover what those are, see: .   "
},
{
  "id": "subsec-group-ex-5",
  "level": "2",
  "url": "sec-group-basics.html#subsec-group-ex-5",
  "type": "Convention",
  "number": "1.14",
  "title": "Identity Theft.",
  "body": "Identity Theft  In familiar groups of numbers, is used for the identity element of a multiplicative group (and likewise in additive groups). Often, is used for the identity element in arbitrary groups, though we will not do so here.  "
},
{
  "id": "subsec-group-ex-6",
  "level": "2",
  "url": "sec-group-basics.html#subsec-group-ex-6",
  "type": "Exercise",
  "number": "1.15",
  "title": "Not Quite Groups.",
  "body": "Not Quite Groups     The natural numbers do not form a group with respect to addition (as its underlying operation).    The rational numbers do not form a group with respect to multiplication.     "
},
{
  "id": "ex-group-of-units",
  "level": "2",
  "url": "sec-group-basics.html#ex-group-of-units",
  "type": "Example",
  "number": "1.16",
  "title": "Groups of Units.",
  "body": "Groups of Units  group of units    Each of the following subsets form an abelian group under multiplication.   The subset of .     , , and .    For each , the subset of .      "
},
{
  "id": "subsec-groups-units-5",
  "level": "2",
  "url": "sec-group-basics.html#subsec-groups-units-5",
  "type": "Convention",
  "number": "1.17",
  "title": "",
  "body": " Some texts use the notation to denote groups of units. For example, would be written .  "
},
{
  "id": "subsec-groups-units-6",
  "level": "2",
  "url": "sec-group-basics.html#subsec-groups-units-6",
  "type": "Remark",
  "number": "1.18",
  "title": "",
  "body": "  will be integral to our constructions of semidirect products in and our classifications of certain groups up to isomorphism (whatever that means). Though not strictly required for this text, knowing the structure of for various can prove helpful in some niche situations (read: certain qualifying exam problems).  "
},
{
  "id": "exe-group-of-units-in-zp",
  "level": "2",
  "url": "sec-group-basics.html#exe-group-of-units-in-zp",
  "type": "Exercise",
  "number": "1.19",
  "title": "<span class=\"process-math\">\\(\\Z\/p^\\times\\)<\/span>.",
  "body": " Prove that .  "
},
{
  "id": "exe-extra-groups",
  "level": "2",
  "url": "sec-group-basics.html#exe-extra-groups",
  "type": "Exercise",
  "number": "1.20",
  "title": "Some Extra Groups.",
  "body": "Some Extra Groups     Let be a multiplicative group, and define the opposite group , , to be the set equipped with the operation , where . Then is a group. Opposite groups are used in category theory to describe something called duality between algebraic structures.  opposite group      Let denote the set of even integers and denote the set of odd integers. Then is a group, whereas is not.           Let be a group.  Associativity of  Let be any elements . Observe Thus, associativity is satisfied in .   Identity Element of  As is a group, it contains an identity element, . I claim that is also the identity element of . Let . Thus for all Therefore, is the identity element of .   Inverses in  Let be an element in . Since is also an element of the group , by the inverse property there exists an inverse element in such that , where is the identity element of . Consider  and  From the previous part we see that is the identity element of , making the inverse of in . Thus every element in has an inverse in , satisfying the inverse element property.       Integer addition is associative, which means that for any three integers , and , the expression is equal to . Thus, associativity is satisfied for .  The identity element for addition is . For any even integer , adding to it does not change its parity (evenness). Hence, the identity element property is satisfied for .  For every even integer , there exists an inverse element denoted as such that . The negative of an even integer is also an even integer. Adding an even integer to its negative results in , which is the identity element. Therefore, the inverse element property is satisfied for .  The identity element for addition is . However, is not an odd integer, so the identity element property is not satisfied for .     "
},
{
  "id": "thm-group-inverses",
  "level": "2",
  "url": "sec-group-basics.html#thm-group-inverses",
  "type": "Theorem",
  "number": "1.21",
  "title": "Properties of Inverses.",
  "body": "Properties of Inverses   If is a group and , then    and               The element is defined to be the inverse of the element . I claim that is also the inverse of .  As is the inverse of , by the inverse property we have and , making the inverse of . Thus both and are inverses of the element . As inverses are unique , we see .    The element is defined to be the inverse of the element . I claim that is also the inverse of . Observe and Thus both and are inverses of , making them equal as inverses are unique .      "
},
{
  "id": "exe-big-inverses",
  "level": "2",
  "url": "sec-group-basics.html#exe-big-inverses",
  "type": "Exercise",
  "number": "1.22",
  "title": "Big ’Ole Inverses.",
  "body": "Big 'Ole Inverses  If is a group and , then .  "
},
{
  "id": "exe-general-associativity",
  "level": "2",
  "url": "sec-group-basics.html#exe-general-associativity",
  "type": "Exercise",
  "number": "1.23",
  "title": "Generalized Associative Law.",
  "body": "Generalized Associative Law generalized associative law  If an element of a group is contructed from a sequence of elements in this order by repeatedly inserting parenthesis and applying the operation, the element must equal and so is independent of the mode of bracketing.  "
},
{
  "id": "sec-group-basics-9",
  "level": "2",
  "url": "sec-group-basics.html#sec-group-basics-9",
  "type": "Summary",
  "number": "1.1",
  "title": "",
  "body": "   A is a set equipped with a that satisfies the associative , identity , and inverse properties. An abelian group is a group that also satisfies the .    The identity and inverse elements described in are unique . For inverses, we have and . See:      and are all additive abelian groups, and form multiplicative abelian groups.    "
},
{
  "id": "sec-order-power",
  "level": "1",
  "url": "sec-order-power.html",
  "type": "Section",
  "number": "1.2",
  "title": "Order and Power",
  "body": "Order and Power     Good order is the foundation of all things.   Edmund Burke    Power  Though it might seem natural to write the product using the notation , we have no notion of what that means in the world of groups. Do exponents behave the way we want them to in groups, or does something disasterous occur? Do exponents even exist? Do I ? In this section, we attempt to answer as many of these questions as is philosophically feasible.  power   Let be an element of a multiplicative group . For , the  power  of is defined recursively as follows: power     , , and ; Convenient notation, isn't it? Almost like we planned it.      when ; and     when .     Note: If was an additive group, then we would write intead of . This would be called a multiple of instead of a power. multiple     Laws of Exponents   Let and be an element of a group . Then    and     .          We proceed via cases: First, let and . We induct on . For the base case, let . Thus we have by definition . Additionally, using the we see and thus . Hence , satisfying the base case.  Now we inductively assume and consider Using we see . Substituting, we have . By the inductive hypothesis, we have and . Using the again, we have . Thus , completing the induction. Hence, when and we have .  Now suppose and . Thus , where . So      Multiplying on both sides by we deduce that and . Finally inversion of the equation yields . Hence the law is established in all cases.    If , it follows from (1) that . Now assume that ; then since .       Abelian Exponents  Let . The equation holds for all if and only if is abelian.    Order  Order      In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . order (of a group element)  (group element)     The order of a group  is the of the set , denoted . order (of a group)  (group)         Some authors use the notation or to refer to the order of a group. We won't name names, but they know who they are.   Order      in every group .     in     In the additive groups , , , and every nonzero (i.e., nonidentity) element has infinite order. Groups with this property are known as torsion-free , a concept explored in more advanced contexts.     In the additve group , the element has order , as and .      Groups of Order  Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.   Properties of Order      An element of a group has order if and only if .         If for and  , then .          Let be a group and consider an element in with order . By definition, the order of an element is the smallest positive integer such that , where is the identity element of . Since the order of is , we have . This implies that is equal to the identity element .       there or  If is a group such every non-identity element has order , then is abelian.   Element Order   Let be a group and any element.   If , then are all distinct elements of .    If , then for all integers (positive or negative) with .     .    If then .       Let be a group and any element.   Let , and suppose by way of contradiction for some such that . Mutliplying on both sides by yields . As , this contradicts the assumption .    If for integers and with , then . Since , one of and must be strictly positive, contrary to the assumption ath .    If , then part (1) shows that has at least elements; if , then part (2) shows that has infinitely many elements.    Let . We have for some by the We have and so, by the definition of order , it must be that        Order Hors d'oeuvre  Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.      The central theorem of group order, (perhaps the central theorem of finite group theory), , requires more machinery than we currently posess. We will get there evantually, but first, it would be useful to examine some more concrete groups and their interactions with what we have constructed thus far.      The hold in groups.    The of an element is the smallest positive integer such that . The order of a group is its cardinality.     "
},
{
  "id": "def-power",
  "level": "2",
  "url": "sec-order-power.html#def-power",
  "type": "Definition",
  "number": "1.24",
  "title": "<span class=\"process-math\">\\(n\\th\\)<\/span> power.",
  "body": "power   Let be an element of a multiplicative group . For , the  power  of is defined recursively as follows: power     , , and ; Convenient notation, isn't it? Almost like we planned it.      when ; and     when .     Note: If was an additive group, then we would write intead of . This would be called a multiple of instead of a power. multiple    "
},
{
  "id": "thm-exponent-laws",
  "level": "2",
  "url": "sec-order-power.html#thm-exponent-laws",
  "type": "Theorem",
  "number": "1.25",
  "title": "Laws of Exponents.",
  "body": "Laws of Exponents   Let and be an element of a group . Then    and     .          We proceed via cases: First, let and . We induct on . For the base case, let . Thus we have by definition . Additionally, using the we see and thus . Hence , satisfying the base case.  Now we inductively assume and consider Using we see . Substituting, we have . By the inductive hypothesis, we have and . Using the again, we have . Thus , completing the induction. Hence, when and we have .  Now suppose and . Thus , where . So      Multiplying on both sides by we deduce that and . Finally inversion of the equation yields . Hence the law is established in all cases.    If , it follows from (1) that . Now assume that ; then since .      "
},
{
  "id": "exe-abelian-exponents",
  "level": "2",
  "url": "sec-order-power.html#exe-abelian-exponents",
  "type": "Exercise",
  "number": "1.26",
  "title": "Abelian Exponents.",
  "body": "Abelian Exponents  Let . The equation holds for all if and only if is abelian.  "
},
{
  "id": "def-order",
  "level": "2",
  "url": "sec-order-power.html#def-order",
  "type": "Definition",
  "number": "1.27",
  "title": "Order.",
  "body": "Order      In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . order (of a group element)  (group element)     The order of a group  is the of the set , denoted . order (of a group)  (group)       "
},
{
  "id": "subsec-order-3",
  "level": "2",
  "url": "sec-order-power.html#subsec-order-3",
  "type": "Convention",
  "number": "1.28",
  "title": "",
  "body": " Some authors use the notation or to refer to the order of a group. We won't name names, but they know who they are.  "
},
{
  "id": "ex-order",
  "level": "2",
  "url": "sec-order-power.html#ex-order",
  "type": "Example",
  "number": "1.29",
  "title": "Order.",
  "body": "Order      in every group .     in     In the additive groups , , , and every nonzero (i.e., nonidentity) element has infinite order. Groups with this property are known as torsion-free , a concept explored in more advanced contexts.     In the additve group , the element has order , as and .     "
},
{
  "id": "exe-order-4-abelian",
  "level": "2",
  "url": "sec-order-power.html#exe-order-4-abelian",
  "type": "Exercise",
  "number": "1.30",
  "title": "Groups of Order <span class=\"process-math\">\\(4\\)<\/span>.",
  "body": "Groups of Order  Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.  "
},
{
  "id": "thm-order-properties",
  "level": "2",
  "url": "sec-order-power.html#thm-order-properties",
  "type": "Theorem",
  "number": "1.31",
  "title": "Properties of Order.",
  "body": "Properties of Order      An element of a group has order if and only if .         If for and  , then .          Let be a group and consider an element in with order . By definition, the order of an element is the smallest positive integer such that , where is the identity element of . Since the order of is , we have . This implies that is equal to the identity element .      "
},
{
  "id": "exe-every-element-order-2",
  "level": "2",
  "url": "sec-order-power.html#exe-every-element-order-2",
  "type": "Exercise",
  "number": "1.32",
  "title": "<span class=\"process-math\">\\(b\\)<\/span> there or <span class=\"process-math\">\\(b^2=e\\)<\/span>.",
  "body": "there or  If is a group such every non-identity element has order , then is abelian.  "
},
{
  "id": "thm-element-order",
  "level": "2",
  "url": "sec-order-power.html#thm-element-order",
  "type": "Theorem",
  "number": "1.33",
  "title": "Element Order.",
  "body": "Element Order   Let be a group and any element.   If , then are all distinct elements of .    If , then for all integers (positive or negative) with .     .    If then .       Let be a group and any element.   Let , and suppose by way of contradiction for some such that . Mutliplying on both sides by yields . As , this contradicts the assumption .    If for integers and with , then . Since , one of and must be strictly positive, contrary to the assumption ath .    If , then part (1) shows that has at least elements; if , then part (2) shows that has infinitely many elements.    Let . We have for some by the We have and so, by the definition of order , it must be that       "
},
{
  "id": "exe-order-and-gcd",
  "level": "2",
  "url": "sec-order-power.html#exe-order-and-gcd",
  "type": "Exercise",
  "number": "1.34",
  "title": "Order Hors d’oeuvre.",
  "body": "Order Hors d'oeuvre  Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.     "
},
{
  "id": "sec-order-power-5",
  "level": "2",
  "url": "sec-order-power.html#sec-order-power-5",
  "type": "Summary",
  "number": "1.2",
  "title": "",
  "body": "   The hold in groups.    The of an element is the smallest positive integer such that . The order of a group is its cardinality.    "
},
{
  "id": "sec-symmetric",
  "level": "1",
  "url": "sec-symmetric.html",
  "type": "Section",
  "number": "1.3",
  "title": "Permutations and Symmetric Groups",
  "body": "Permutations and Symmetric Groups     Symmetry is overrated. Overrated is symmetry.   Larry Wall    Symmetric Groups  Let's introduce another very important example: symmetric groups.  Permutations   A permutation permutation of a set is a bijective function . The set of all permutations of a set is denoted . permutation group       Symmetric Group   For any , the symmetric group symmetric group is the set equipped with the composition of functions as its binary operation.      Order of  Prove .      Cycles and Transpositions  Cycles and Transpositions   If are distinct integers between and , then denotes the element of that satisfies for . Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition . cycle  transposition     latex Cycle Notation  In latex , \\, is used to add spacing between the symbols in a cycle. The command \\; can also be used for wider spacing.   Cycle  When regarded as an element of , sends to , to and to , and it fixes . (Note that the value of in cycle notation is sometimes ambiguous.)    Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .   We compose cycles the same way we compose functions.  Composing Cycles  Consider This equation might lead you to the false belief that every element of is a cycle. This is not true — for example, the product cannot be written as a single cycle. What is true is that every element of is uniquely (up to ordering) the product of disjoint cycles. We'll prove that soon in .   Disjoint Commutes   Disjoint cycles commute, disjoint cycles that is, if , and then .    Let's consider two disjoint cycles, denoted as and , where 's and 's are distinct elements. Let's analyze the composition : When we apply the composition to an element , we have: Similarly, when we apply the composition to an element , we have: From these calculations, we can observe that the composition maps each element to (if ), and it maps to . Similarly, the composition maps each element to (if ), and it maps to .  Now, let's consider the composition and evaluate its effect on the elements and : and Comparing these results with the previous composition, we see that the effects on and are the same in both compositions. This implies that the compositions and are identical.  Therefore, we have shown that disjoint cycles commute, meaning that the order in which they are composed does not affect the final result.    While sufficent, this is not a necessary condition.  Non-Disjoint Commutes  Find elements that commute but are not disjoint.   Cycle Decompostion      Each can be written as a product (composition) of disjoint cycles cycle decompostion , and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions.         For the uniqueness part of statement (1) in one needs to establish a convention regarding -cycles, that is one needs to stipulate either that the -cycles will not be recorded (which gives the shortest such factorization) or that all the -cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).   Now that we know that every permutation can be written as a product of transpositions, we can utilize this to gain insight into many aspects of the group structure, such as the order of elements.  Permutation Order   The order of a permutation is the least common multiple of the lengths of the cycles it is a product of. In particular, every transposition is its own inverse and the order of a -cycle in is .    Coming soon!     Even and Odd Permutations  We can also categorize elements of permutation groups by the number of transpositions it is a product of.  Even and Odd Permutaitons   A permutation is even even permutation is if is the product of an even number of transpositions, otherwise it is odd odd permutation .    Even and Odd Properties      A -cycle is even if and only if is odd.    Products of even permutations are even, products of odd permutations are even, products of even and odd permutations are odd.    The identity permutation in is even, but not odd.    No permutation in is both even and odd.       Alternating Group   The alternating group alternating group  is the subset of all even cycles of .     Order of  Prove .       The is the group of reflections and rotations of a regular polygon. Every element in can be written as a product of rotations and reflections . See: and .     The  is set of all of a set with elements. The order of is . See: .     Permutations are either even or odd; the is the set of even permutations. The order of is . See: .      are special permutations. Every cycle can be written as a product of transpositions. See: , though we don't have the tools to prove this explicitly just yet.     The exist.     "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-symmetric.html#def-permutation",
  "type": "Definition",
  "number": "1.35",
  "title": "Permutations.",
  "body": "Permutations   A permutation permutation of a set is a bijective function . The set of all permutations of a set is denoted . permutation group      "
},
{
  "id": "def-symmetric-group",
  "level": "2",
  "url": "sec-symmetric.html#def-symmetric-group",
  "type": "Definition",
  "number": "1.36",
  "title": "Symmetric Group <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Symmetric Group   For any , the symmetric group symmetric group is the set equipped with the composition of functions as its binary operation.    "
},
{
  "id": "exe-sn-order",
  "level": "2",
  "url": "sec-symmetric.html#exe-sn-order",
  "type": "Exercise",
  "number": "1.37",
  "title": "Order of <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Order of  Prove .    "
},
{
  "id": "def-cycle",
  "level": "2",
  "url": "sec-symmetric.html#def-cycle",
  "type": "Definition",
  "number": "1.38",
  "title": "Cycles and Transpositions.",
  "body": "Cycles and Transpositions   If are distinct integers between and , then denotes the element of that satisfies for . Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition . cycle  transposition    "
},
{
  "id": "ex-cycle",
  "level": "2",
  "url": "sec-symmetric.html#ex-cycle",
  "type": "Example",
  "number": "1.39",
  "title": "Cycle.",
  "body": "Cycle  When regarded as an element of , sends to , to and to , and it fixes . (Note that the value of in cycle notation is sometimes ambiguous.)  "
},
{
  "id": "subsec-cycles-transpositions-5",
  "level": "2",
  "url": "sec-symmetric.html#subsec-cycles-transpositions-5",
  "type": "Remark",
  "number": "1.40",
  "title": "",
  "body": " Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .  "
},
{
  "id": "exe-composing-cycles",
  "level": "2",
  "url": "sec-symmetric.html#exe-composing-cycles",
  "type": "Example",
  "number": "1.41",
  "title": "Composing Cycles.",
  "body": "Composing Cycles  Consider This equation might lead you to the false belief that every element of is a cycle. This is not true — for example, the product cannot be written as a single cycle. What is true is that every element of is uniquely (up to ordering) the product of disjoint cycles. We'll prove that soon in .  "
},
{
  "id": "prop-disjoint-cycles-commute",
  "level": "2",
  "url": "sec-symmetric.html#prop-disjoint-cycles-commute",
  "type": "Proposition",
  "number": "1.42",
  "title": "Disjoint Commutes.",
  "body": "Disjoint Commutes   Disjoint cycles commute, disjoint cycles that is, if , and then .    Let's consider two disjoint cycles, denoted as and , where 's and 's are distinct elements. Let's analyze the composition : When we apply the composition to an element , we have: Similarly, when we apply the composition to an element , we have: From these calculations, we can observe that the composition maps each element to (if ), and it maps to . Similarly, the composition maps each element to (if ), and it maps to .  Now, let's consider the composition and evaluate its effect on the elements and : and Comparing these results with the previous composition, we see that the effects on and are the same in both compositions. This implies that the compositions and are identical.  Therefore, we have shown that disjoint cycles commute, meaning that the order in which they are composed does not affect the final result.   "
},
{
  "id": "exe-non-disjoint-commutes",
  "level": "2",
  "url": "sec-symmetric.html#exe-non-disjoint-commutes",
  "type": "Exercise",
  "number": "1.43",
  "title": "Non-Disjoint Commutes.",
  "body": "Non-Disjoint Commutes  Find elements that commute but are not disjoint.  "
},
{
  "id": "thm-cycledecomp",
  "level": "2",
  "url": "sec-symmetric.html#thm-cycledecomp",
  "type": "Theorem",
  "number": "1.44",
  "title": "Cycle Decompostion.",
  "body": "Cycle Decompostion      Each can be written as a product (composition) of disjoint cycles cycle decompostion , and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions.       "
},
{
  "id": "subsec-cycles-transpositions-12",
  "level": "2",
  "url": "sec-symmetric.html#subsec-cycles-transpositions-12",
  "type": "Remark",
  "number": "1.45",
  "title": "",
  "body": " For the uniqueness part of statement (1) in one needs to establish a convention regarding -cycles, that is one needs to stipulate either that the -cycles will not be recorded (which gives the shortest such factorization) or that all the -cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).  "
},
{
  "id": "prop-permutation-order",
  "level": "2",
  "url": "sec-symmetric.html#prop-permutation-order",
  "type": "Proposition",
  "number": "1.46",
  "title": "Permutation Order.",
  "body": "Permutation Order   The order of a permutation is the least common multiple of the lengths of the cycles it is a product of. In particular, every transposition is its own inverse and the order of a -cycle in is .    Coming soon!   "
},
{
  "id": "def-even-odd-permutation",
  "level": "2",
  "url": "sec-symmetric.html#def-even-odd-permutation",
  "type": "Definition",
  "number": "1.47",
  "title": "Even and Odd Permutaitons.",
  "body": "Even and Odd Permutaitons   A permutation is even even permutation is if is the product of an even number of transpositions, otherwise it is odd odd permutation .   "
},
{
  "id": "prop-even-odd-properties",
  "level": "2",
  "url": "sec-symmetric.html#prop-even-odd-properties",
  "type": "Proposition",
  "number": "1.48",
  "title": "Even and Odd Properties.",
  "body": "Even and Odd Properties      A -cycle is even if and only if is odd.    Products of even permutations are even, products of odd permutations are even, products of even and odd permutations are odd.    The identity permutation in is even, but not odd.    No permutation in is both even and odd.      "
},
{
  "id": "def-alternating-group",
  "level": "2",
  "url": "sec-symmetric.html#def-alternating-group",
  "type": "Definition",
  "number": "1.49",
  "title": "Alternating Group.",
  "body": "Alternating Group   The alternating group alternating group  is the subset of all even cycles of .    "
},
{
  "id": "exe-an-order",
  "level": "2",
  "url": "sec-symmetric.html#exe-an-order",
  "type": "Exercise",
  "number": "1.50",
  "title": "Order of <span class=\"process-math\">\\(A_n\\)<\/span>.",
  "body": "Order of  Prove .  "
},
{
  "id": "sec-symmetric-6",
  "level": "2",
  "url": "sec-symmetric.html#sec-symmetric-6",
  "type": "Summary",
  "number": "1.3",
  "title": "",
  "body": "   The is the group of reflections and rotations of a regular polygon. Every element in can be written as a product of rotations and reflections . See: and .     The  is set of all of a set with elements. The order of is . See: .     Permutations are either even or odd; the is the set of even permutations. The order of is . See: .      are special permutations. Every cycle can be written as a product of transpositions. See: , though we don't have the tools to prove this explicitly just yet.     The exist.    "
},
{
  "id": "sec-d2n",
  "level": "1",
  "url": "sec-d2n.html",
  "type": "Section",
  "number": "1.4",
  "title": "Dihedral Groups",
  "body": "Dihedral Groups     Reflection is one of the most underused yet powerful tools for success.   Richard Carlson    Dihedral Groups  Isometry and Symmetry   For any integer , let denote a regular -gon regular -gon . An isometry isometry of the plane is a function that is a bijection and preserves the Euclidean distance for any ). A symmetry symmetry of is an isometry that maps to itself.     By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via .   There are three natural types of isometry in    rotations about a point,    reflections in a line,    and translations: in the latter the point is moved to for some fixed .   It can be shown that every isometry is a rotation, a translation, a reflection, or the product of a reflection and a translation.  Composition of Symmetries  The of two symmetries of is again a symmetry of .   Let be the composition of and , where denotes composition. Let's take an arbitrary point on the object. When we apply the symmetry to , it is mapped to a new point, let's call it . Since is a symmetry, is still on the object. Next, when we apply the symmetry to , it is mapped to a new point, let's call it . Again, since is a symmetry, is still on the object. Therefore, the composition maps the point on the object to the point , which is also on the object. Hence, the composition of symmetries is again a symmetry.   Dihedral Group   The dihedral group  dihedral group is the set of symmetries of the regular -gon equipped with the binary operation given by composition.     Rotations and Reflections  Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis.   If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. rotation     For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis. reflection       Elements of  Elements of . Quiver     We see and , which may make some intuitive sense. The fact that is a reflection and hence that may be slightly less aparent.   Order of      Every element in can be written as or for .            We will use some geometric notions freely without complete justification. For example, we use that if an isometry of fixes two points and , then it is either the identity element or it is reflection about the line . We also use that every element of maps the origin to itself (since the origin is the center of mass of ). Finally, we use that every isometry of is either orientation preserving or orientation reversing .  Label the vertices of as , with being the vertex located on the positive -axis, being the vertex adjacent to in the counter-clockwise direction, etc. We have , , etc., and so . Moreover any isometry must send a vertex to a vertex because the vertices are the points on at largest distance from the origin.  Let be an arbitrary symmetry of . Then for some . Then the element fixes and the origin, and hence either or from the discussion above. We get that or , proving the first assertion.  Since , we see that if for , then . We have for any since the former is orientation reversing and the latter is orientation preserving. If for , then upon multiplying on the left of we get .     "
},
{
  "id": "def-iso-and-sym",
  "level": "2",
  "url": "sec-d2n.html#def-iso-and-sym",
  "type": "Definition",
  "number": "1.51",
  "title": "Isometry and Symmetry.",
  "body": "Isometry and Symmetry   For any integer , let denote a regular -gon regular -gon . An isometry isometry of the plane is a function that is a bijection and preserves the Euclidean distance for any ). A symmetry symmetry of is an isometry that maps to itself.   "
},
{
  "id": "subsec-d2n-3",
  "level": "2",
  "url": "sec-d2n.html#subsec-d2n-3",
  "type": "Remark",
  "number": "1.52",
  "title": "",
  "body": " By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via .  "
},
{
  "id": "exe-symmetry-compostion",
  "level": "2",
  "url": "sec-d2n.html#exe-symmetry-compostion",
  "type": "Exercise",
  "number": "1.53",
  "title": "Composition of Symmetries.",
  "body": "Composition of Symmetries  The of two symmetries of is again a symmetry of .   Let be the composition of and , where denotes composition. Let's take an arbitrary point on the object. When we apply the symmetry to , it is mapped to a new point, let's call it . Since is a symmetry, is still on the object. Next, when we apply the symmetry to , it is mapped to a new point, let's call it . Again, since is a symmetry, is still on the object. Therefore, the composition maps the point on the object to the point , which is also on the object. Hence, the composition of symmetries is again a symmetry.  "
},
{
  "id": "def-d2n",
  "level": "2",
  "url": "sec-d2n.html#def-d2n",
  "type": "Definition",
  "number": "1.54",
  "title": "Dihedral Group.",
  "body": "Dihedral Group   The dihedral group  dihedral group is the set of symmetries of the regular -gon equipped with the binary operation given by composition.    "
},
{
  "id": "ex-d2n-elements",
  "level": "2",
  "url": "sec-d2n.html#ex-d2n-elements",
  "type": "Example",
  "number": "1.55",
  "title": "Rotations and Reflections.",
  "body": "Rotations and Reflections  Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis.   If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. rotation     For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis. reflection      "
},
{
  "id": "figure-d4",
  "level": "2",
  "url": "sec-d2n.html#figure-d4",
  "type": "Figure",
  "number": "1.56",
  "title": "Elements of <span class=\"process-math\">\\(D_4\\)<\/span>",
  "body": "Elements of  Elements of . Quiver   "
},
{
  "id": "subsec-d2n-9",
  "level": "2",
  "url": "sec-d2n.html#subsec-d2n-9",
  "type": "Remark",
  "number": "1.57",
  "title": "",
  "body": " We see and , which may make some intuitive sense. The fact that is a reflection and hence that may be slightly less aparent.  "
},
{
  "id": "thm-d2n-order",
  "level": "2",
  "url": "sec-d2n.html#thm-d2n-order",
  "type": "Proposition",
  "number": "1.58",
  "title": "Order of <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Order of      Every element in can be written as or for .            We will use some geometric notions freely without complete justification. For example, we use that if an isometry of fixes two points and , then it is either the identity element or it is reflection about the line . We also use that every element of maps the origin to itself (since the origin is the center of mass of ). Finally, we use that every isometry of is either orientation preserving or orientation reversing .  Label the vertices of as , with being the vertex located on the positive -axis, being the vertex adjacent to in the counter-clockwise direction, etc. We have , , etc., and so . Moreover any isometry must send a vertex to a vertex because the vertices are the points on at largest distance from the origin.  Let be an arbitrary symmetry of . Then for some . Then the element fixes and the origin, and hence either or from the discussion above. We get that or , proving the first assertion.  Since , we see that if for , then . We have for any since the former is orientation reversing and the latter is orientation preserving. If for , then upon multiplying on the left of we get .   "
},
{
  "id": "sec-gphoms",
  "level": "1",
  "url": "sec-gphoms.html",
  "type": "Section",
  "number": "1.5",
  "title": "Group Homomorphisms",
  "body": "Group Homomorphisms  Homomorphism? I Barely Know 'em!    In the end, the character of a civilization is encased in its structures.   Frank Gehry   The Greek roots \"homo\" and \"morph\" together mean \"same shape\".  Group Homomorphism   If and are groups, a homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively. the common symbols we use to denote homomorphisms  group homomorphism  homomorphism of groups     latex :  In latex , is written using \\varphi .   Homomorphism Notation: vs.  We use to denote an arbitrary homomorphism instead of to differentiate between homormorphisms and ordinary functions.  Some folk use for homomorphisms as well as functions that are not homomorphisms. This is usually harmless, we avoid doing so here only to remove as much ambiguity as possible.   Intuitively, a group homomorphism preserves the algebraic structure of the group, while allowing us to compare and relate different groups. In this way, group homomorphisms allow us to study the properties of groups by comparing them to other groups that we already understand well.  Homormophism Examples      The identity map is a group homomorphism for any group , this is known as the trivial homomorphism . trivial homomorphism     The zero map is a group homomorphism from .    The sign homomorphism  that sends even permuations to and odd permutations to is a homomorphism. sign homomorphism           Let , and let denote the identity map on . Then Thus is operation preserving, making it a group homomorphism for any group .    Let , and let denote the zero map. As , is indeed a group homomorphism.    We begin by noting that is indeed a group, as , as seen in . Let . We proceed via cases.  First, suppose both and are even permutations. Thus is an even permutation by , and hence   Now suppose is even and is odd. Thus is an odd permutation by , and hence   Next, suppose is odd and is even. Thus is an odd permutation by , and hence   Finally, suppose both and are odd permutations. Thus is an even permutation by , and hence   This shows is a homomorphism in all cases.           The exponential map exponential map  is a homomorphism.    The natural log map natural log map  is a homomorphism.    For any positive integer , the map determinant map determinant map  is a group homomorphism.      Specifically, homomorphisms will preserve the additive structure, such as the identity element and inverse elements.  Homomorphism Preservations   If is a homomorphism of groups, then the following hold:         .       Let be a homomorphism of groups.   Observe:     Let . I claim that is the inverse of in : Thus and are both inverses of in , and so , since inverses are unique .        Let be a homomorphism of groups, and let . Then .   Compositions of Homomorphisms   If and are group homomorphisms, the composition is a group homomorphism.    Suppose and be group homomorphisms, and let . Thus is a group homomorphism.    Sweet  Let and be abelian groups. Then the set of all group homomorphisms from to is itself an abelian group.    Kernel   Let be a homomorphism of groups. The kernel of is the set  (groups)  kernel (of a group homomorphism)     Injective and Surjective Homomorphisms      A group homomorphism is injective if and only if . Such homomorphisms are called monomorphisms     A group homomorphism is surjective if and only if . Such homomorphisms are called epimorphisms            Suppose is injective. By we know . Thus and .  Let . Thus . As is injective, this means . Hence , making the two sets equal.   Suppose . Suppose further there exist such that .  I claim is the inverse of . Observe Thus , meaning . Therefore, is the inverse of , making as  inverses are unique . Hence, is injective.    This proof is identical to that of ; the homomorphism aspect adds nothing of interest. Though one could argue that adding nothing of interest is interesting, causing it to add something of interest.        Homomorphisms and Order  If is a homomorphism of groups and is finte, then .    Isomorphism? I Know 'em!    The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.   F. Scott Fitzgerald   Group Ismorphism   A homomorphism is called an isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic , written . Isomorphic  isomorphism (of groups)  isomorphic (as groups)     latex :  In latex , is written using \\cong .   Intuitively, a group isomorphism establishes a one-to-one correspondence between the elements of two groups, such that they have exactly the same algebraic structure. This means that the groups are essentially the same, up to a relabeling of their elements.  Equivalent Isomorphism Characterization   Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).     Suppose an isomorphism. Then there exists a homomorphism such that and . Thus is invertible . By  is bijective.  ( ) Suppose is bijective homomorphism. By  is invertible, meaning there exists some function   Notice we use , not ! We are not able to assume is a homomorphism, we must prove this! such that and .  I claim is actually a homomorphism: For we have Thus Since is bijective it is injective, and thus , making a homomorphism.     Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I am referencing as many times as possible, as is important and should not be forgotten.   Isomorphism Examples     The identity map is a group isomomorphism for any group .     .     , where is as defined in .      More Isomorphisms     Let be a group and the of . Then .         The exponential and natural logarithm maps from are inverses, making them isomorphisms as well.      Isomorphism Invariants   Let and be groups. If is an isomorphism, then the following hold: isomorphism invariant       .     for all and for all .     is abelian if and only if is abelian.       Let be an isomorphism of groups with inverse .   By  is a bijective function between and . Thus .    Let and , and let denote the orders of , respectively. Thus and Thus and .  I claim and are the smallest positive integers where this holds. Suppose by way of contradiction there exist and such that and . But then and As and , this contradicts and .     Suppose is abelian, and let . Thus every element two elements in commute, making abelian.   Suppose is abelian, and let . Thus every element two elements in commute, making abelian.       Something's Missing  Justify why the following pairs of groups are not isomorphic.   and    and    and    and      There Can Only Be One...  All trivial groups are (canonically) isomorphic. Hence, we usually speak of the trivial group.   Isomorphisms form Equivalence Relation           If , then     If and , then           The identity map from is an isomorphism , making isomorphic to .    Suppose is an isomorphism. Then there exists a homomorphism such that and . Thus is an isomorphism from to , and so .    Let and be isomorphisms. From we see is a homomorphism of groups. As both and are injective, is injective by . Similarly, as both and are surjective, is surjective by . Thus is a bijective homomorphism from to , we see by         The quotation marks in the title of this result are important. Equivalence relations as we know them are only defined on sets , but there is no set of all groups, much as there is no set of all sets. This dips into the realm of Russel's Paradox and higher category theory, which we will steer clear of for the time being.    Automorphism? I'm Am 'em!    Self preservation is the first law of nature.   Samuel Butler  Group Automorphism   Let be a group. An isomorphism is called an automorphism  automorphism (of a group) of .     In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism.   Automorphism Group   The set of automorphisms of a group is called the automorphism group of and denoted . automorphism group (of a group)      Let's verify that this group is indeed what it claims to be. The more pedantic reader might object to a group claiming anything, as it is an abstract concept. However, the more sassy author would politely tell them to keep it to themselves.   The Automorphism Group   The set of automorphisms of , denoted , is a group under composition.    First, I show that operation is associative. Let . As function composition is associative , we see .  I claim is the identity element of . Recall from that is indeed an automorphism. Let . We will show . As all functions share the same domain and co-domain, we need only show that the functions map elements equally, Let , and observe: Thus is indeed the identity element in .  Finally, I show that every automorphism has an inverse, Let . As is an isomorphism, there exists a homomorphism such that and . Thus is, itself, an automorphism of , and so , making the inverse of .    Complex Conjugation Automorphism  The function given by is an automorphism.         Notice that we have already shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)   Inner Automorphism   Let be a group and . The function defined by is called the inner automorphism inner automorphism of induced by . The set of inner automorphisms inner automorphism group of is denoted .     Let's make sure this is indeed an automorphism to avoid any potential awkwardness down the line.  Conjugation Automorphism   Let be a group and . Then for all .    Let be a group and . For any , observe proving that is a homomorhism from to itself.  I claim holds for any . Observe Additionally, notice that for all , and thus .  As , it follows and . This proves has a two-sided inverse and hence is an isomorphism. In fact, it shows that . Thus for all .     In this text is primarily reserved for conjugation automorphisms, where the subscript identifies which element is doing the conjugating.    There is a notion of outer automorphisms as well, though we currently lack the tools to define them rigorously.        A is a function between groups that preserves certain algebraic structures, such as the operation, identites, and inverses. For the first, see: . For the second and third, see: The set of elements mapped to the identity by a homomorphism is known as its .    A is a bijective homomorphism, and a is an isomorphism from a group to itself. The structures preserved by an isomorphism are known as .    The set of automorphisms of a group forms a group itself: the of the group. See: Specifically, the will prove very important later.    Compositions of homomorphisms, isomorphisms, and automophisms are again homomorphisms, isomorphisms, and automophisms, respectively.     "
},
{
  "id": "def-ghom",
  "level": "2",
  "url": "sec-gphoms.html#def-ghom",
  "type": "Definition",
  "number": "1.59",
  "title": "Group Homomorphism.",
  "body": "Group Homomorphism   If and are groups, a homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively. the common symbols we use to denote homomorphisms  group homomorphism  homomorphism of groups    "
},
{
  "id": "subsec-homom-6",
  "level": "2",
  "url": "sec-gphoms.html#subsec-homom-6",
  "type": "Convention",
  "number": "1.60",
  "title": "Homomorphism Notation: <span class=\"process-math\">\\(\\varphi\\)<\/span> vs. <span class=\"process-math\">\\(f\\)<\/span>.",
  "body": "Homomorphism Notation: vs.  We use to denote an arbitrary homomorphism instead of to differentiate between homormorphisms and ordinary functions.  Some folk use for homomorphisms as well as functions that are not homomorphisms. This is usually harmless, we avoid doing so here only to remove as much ambiguity as possible.  "
},
{
  "id": "ex-group-homom-examples",
  "level": "2",
  "url": "sec-gphoms.html#ex-group-homom-examples",
  "type": "Example",
  "number": "1.61",
  "title": "Homormophism Examples.",
  "body": "Homormophism Examples      The identity map is a group homomorphism for any group , this is known as the trivial homomorphism . trivial homomorphism     The zero map is a group homomorphism from .    The sign homomorphism  that sends even permuations to and odd permutations to is a homomorphism. sign homomorphism           Let , and let denote the identity map on . Then Thus is operation preserving, making it a group homomorphism for any group .    Let , and let denote the zero map. As , is indeed a group homomorphism.    We begin by noting that is indeed a group, as , as seen in . Let . We proceed via cases.  First, suppose both and are even permutations. Thus is an even permutation by , and hence   Now suppose is even and is odd. Thus is an odd permutation by , and hence   Next, suppose is odd and is even. Thus is an odd permutation by , and hence   Finally, suppose both and are odd permutations. Thus is an even permutation by , and hence   This shows is a homomorphism in all cases.      "
},
{
  "id": "exe-more-group-homs",
  "level": "2",
  "url": "sec-gphoms.html#exe-more-group-homs",
  "type": "Exercise",
  "number": "1.62",
  "title": "",
  "body": "    The exponential map exponential map  is a homomorphism.    The natural log map natural log map  is a homomorphism.    For any positive integer , the map determinant map determinant map  is a group homomorphism.     "
},
{
  "id": "thm-grphomom-preservations",
  "level": "2",
  "url": "sec-gphoms.html#thm-grphomom-preservations",
  "type": "Theorem",
  "number": "1.63",
  "title": "Homomorphism Preservations.",
  "body": "Homomorphism Preservations   If is a homomorphism of groups, then the following hold:         .       Let be a homomorphism of groups.   Observe:     Let . I claim that is the inverse of in : Thus and are both inverses of in , and so , since inverses are unique .      "
},
{
  "id": "exe-grp-hom-order-split",
  "level": "2",
  "url": "sec-gphoms.html#exe-grp-hom-order-split",
  "type": "Exercise",
  "number": "1.64",
  "title": "",
  "body": " Let be a homomorphism of groups, and let . Then .  "
},
{
  "id": "thm-ghom-composition",
  "level": "2",
  "url": "sec-gphoms.html#thm-ghom-composition",
  "type": "Theorem",
  "number": "1.65",
  "title": "Compositions of Homomorphisms.",
  "body": "Compositions of Homomorphisms   If and are group homomorphisms, the composition is a group homomorphism.    Suppose and be group homomorphisms, and let . Thus is a group homomorphism.   "
},
{
  "id": "exe-group-hom",
  "level": "2",
  "url": "sec-gphoms.html#exe-group-hom",
  "type": "Exercise",
  "number": "1.66",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> Sweet <span class=\"process-math\">\\(\\Hom\\)<\/span>.",
  "body": "Sweet  Let and be abelian groups. Then the set of all group homomorphisms from to is itself an abelian group.   "
},
{
  "id": "def-group-kernel",
  "level": "2",
  "url": "sec-gphoms.html#def-group-kernel",
  "type": "Definition",
  "number": "1.67",
  "title": "Kernel.",
  "body": "Kernel   Let be a homomorphism of groups. The kernel of is the set  (groups)  kernel (of a group homomorphism)    "
},
{
  "id": "thm-inj-surj-ghom",
  "level": "2",
  "url": "sec-gphoms.html#thm-inj-surj-ghom",
  "type": "Theorem",
  "number": "1.68",
  "title": "Injective and Surjective Homomorphisms.",
  "body": "Injective and Surjective Homomorphisms      A group homomorphism is injective if and only if . Such homomorphisms are called monomorphisms     A group homomorphism is surjective if and only if . Such homomorphisms are called epimorphisms            Suppose is injective. By we know . Thus and .  Let . Thus . As is injective, this means . Hence , making the two sets equal.   Suppose . Suppose further there exist such that .  I claim is the inverse of . Observe Thus , meaning . Therefore, is the inverse of , making as  inverses are unique . Hence, is injective.    This proof is identical to that of ; the homomorphism aspect adds nothing of interest. Though one could argue that adding nothing of interest is interesting, causing it to add something of interest.       "
},
{
  "id": "exe-order-preservation",
  "level": "2",
  "url": "sec-gphoms.html#exe-order-preservation",
  "type": "Exercise",
  "number": "1.69",
  "title": "Homomorphisms and Order.",
  "body": "Homomorphisms and Order  If is a homomorphism of groups and is finte, then .  "
},
{
  "id": "def-gpiso",
  "level": "2",
  "url": "sec-gphoms.html#def-gpiso",
  "type": "Definition",
  "number": "1.70",
  "title": "Group Ismorphism.",
  "body": "Group Ismorphism   A homomorphism is called an isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic , written . Isomorphic  isomorphism (of groups)  isomorphic (as groups)    "
},
{
  "id": "thm-iso-def",
  "level": "2",
  "url": "sec-gphoms.html#thm-iso-def",
  "type": "Theorem",
  "number": "1.71",
  "title": "Equivalent Isomorphism Characterization.",
  "body": "Equivalent Isomorphism Characterization   Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).     Suppose an isomorphism. Then there exists a homomorphism such that and . Thus is invertible . By  is bijective.  ( ) Suppose is bijective homomorphism. By  is invertible, meaning there exists some function   Notice we use , not ! We are not able to assume is a homomorphism, we must prove this! such that and .  I claim is actually a homomorphism: For we have Thus Since is bijective it is injective, and thus , making a homomorphism.   "
},
{
  "id": "subsec-isomorphisms-7",
  "level": "2",
  "url": "sec-gphoms.html#subsec-isomorphisms-7",
  "type": "Remark",
  "number": "1.72",
  "title": "",
  "body": " Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I am referencing as many times as possible, as is important and should not be forgotten.  "
},
{
  "id": "ex-group-iso-examples",
  "level": "2",
  "url": "sec-gphoms.html#ex-group-iso-examples",
  "type": "Example",
  "number": "1.73",
  "title": "Isomorphism Examples.",
  "body": "Isomorphism Examples     The identity map is a group isomomorphism for any group .     .     , where is as defined in .     "
},
{
  "id": "exe-more-grp-isos",
  "level": "2",
  "url": "sec-gphoms.html#exe-more-grp-isos",
  "type": "Exercise",
  "number": "1.74",
  "title": "More Isomorphisms.",
  "body": "More Isomorphisms     Let be a group and the of . Then .         The exponential and natural logarithm maps from are inverses, making them isomorphisms as well.     "
},
{
  "id": "thm-iso-inv",
  "level": "2",
  "url": "sec-gphoms.html#thm-iso-inv",
  "type": "Theorem",
  "number": "1.75",
  "title": "Isomorphism Invariants.",
  "body": "Isomorphism Invariants   Let and be groups. If is an isomorphism, then the following hold: isomorphism invariant       .     for all and for all .     is abelian if and only if is abelian.       Let be an isomorphism of groups with inverse .   By  is a bijective function between and . Thus .    Let and , and let denote the orders of , respectively. Thus and Thus and .  I claim and are the smallest positive integers where this holds. Suppose by way of contradiction there exist and such that and . But then and As and , this contradicts and .     Suppose is abelian, and let . Thus every element two elements in commute, making abelian.   Suppose is abelian, and let . Thus every element two elements in commute, making abelian.      "
},
{
  "id": "exe-not-isomorphic",
  "level": "2",
  "url": "sec-gphoms.html#exe-not-isomorphic",
  "type": "Exercise",
  "number": "1.76",
  "title": "Something’s Missing.",
  "body": "Something's Missing  Justify why the following pairs of groups are not isomorphic.   and    and    and    and     "
},
{
  "id": "subsec-isomorphisms-12",
  "level": "2",
  "url": "sec-gphoms.html#subsec-isomorphisms-12",
  "type": "Exercise",
  "number": "1.77",
  "title": "There Can Only Be One....",
  "body": "There Can Only Be One...  All trivial groups are (canonically) isomorphic. Hence, we usually speak of the trivial group.  "
},
{
  "id": "thm-iso-equivalence-relation",
  "level": "2",
  "url": "sec-gphoms.html#thm-iso-equivalence-relation",
  "type": "Theorem",
  "number": "1.78",
  "title": "Isomorphisms form “Equivalence” Relation.",
  "body": "Isomorphisms form Equivalence Relation           If , then     If and , then           The identity map from is an isomorphism , making isomorphic to .    Suppose is an isomorphism. Then there exists a homomorphism such that and . Thus is an isomorphism from to , and so .    Let and be isomorphisms. From we see is a homomorphism of groups. As both and are injective, is injective by . Similarly, as both and are surjective, is surjective by . Thus is a bijective homomorphism from to , we see by       "
},
{
  "id": "subsec-isomorphisms-14",
  "level": "2",
  "url": "sec-gphoms.html#subsec-isomorphisms-14",
  "type": "Remark",
  "number": "1.79",
  "title": "",
  "body": " The quotation marks in the title of this result are important. Equivalence relations as we know them are only defined on sets , but there is no set of all groups, much as there is no set of all sets. This dips into the realm of Russel's Paradox and higher category theory, which we will steer clear of for the time being.  "
},
{
  "id": "def-gp-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#def-gp-automorphism",
  "type": "Definition",
  "number": "1.80",
  "title": "Group Automorphism.",
  "body": "Group Automorphism   Let be a group. An isomorphism is called an automorphism  automorphism (of a group) of .   "
},
{
  "id": "ex-identity-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#ex-identity-automorphism",
  "type": "Example",
  "number": "1.81",
  "title": "",
  "body": " In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism.  "
},
{
  "id": "def-gp-aut",
  "level": "2",
  "url": "sec-gphoms.html#def-gp-aut",
  "type": "Definition",
  "number": "1.82",
  "title": "Automorphism Group.",
  "body": "Automorphism Group   The set of automorphisms of a group is called the automorphism group of and denoted . automorphism group (of a group)     "
},
{
  "id": "prop-aut-is-group",
  "level": "2",
  "url": "sec-gphoms.html#prop-aut-is-group",
  "type": "Proposition",
  "number": "1.83",
  "title": "The Automorphism Group.",
  "body": "The Automorphism Group   The set of automorphisms of , denoted , is a group under composition.    First, I show that operation is associative. Let . As function composition is associative , we see .  I claim is the identity element of . Recall from that is indeed an automorphism. Let . We will show . As all functions share the same domain and co-domain, we need only show that the functions map elements equally, Let , and observe: Thus is indeed the identity element in .  Finally, I show that every automorphism has an inverse, Let . As is an isomorphism, there exists a homomorphism such that and . Thus is, itself, an automorphism of , and so , making the inverse of .   "
},
{
  "id": "exe-complex-conjugation-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#exe-complex-conjugation-automorphism",
  "type": "Exercise",
  "number": "1.84",
  "title": "Complex Conjugation Automorphism.",
  "body": "Complex Conjugation Automorphism  The function given by is an automorphism.  "
},
{
  "id": "ex-z-aut",
  "level": "2",
  "url": "sec-gphoms.html#ex-z-aut",
  "type": "Exercise",
  "number": "1.85",
  "title": "<span class=\"process-math\">\\(\\Aut(\\Z)\\)<\/span>.",
  "body": "    "
},
{
  "id": "subsec-automorphisms-10",
  "level": "2",
  "url": "sec-gphoms.html#subsec-automorphisms-10",
  "type": "Remark",
  "number": "1.86",
  "title": "",
  "body": " Notice that we have already shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)  "
},
{
  "id": "def-inner-automorphisms",
  "level": "2",
  "url": "sec-gphoms.html#def-inner-automorphisms",
  "type": "Definition",
  "number": "1.87",
  "title": "Inner Automorphism.",
  "body": "Inner Automorphism   Let be a group and . The function defined by is called the inner automorphism inner automorphism of induced by . The set of inner automorphisms inner automorphism group of is denoted .    "
},
{
  "id": "prop-conjugation-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#prop-conjugation-automorphism",
  "type": "Proposition",
  "number": "1.88",
  "title": "Conjugation Automorphism.",
  "body": "Conjugation Automorphism   Let be a group and . Then for all .    Let be a group and . For any , observe proving that is a homomorhism from to itself.  I claim holds for any . Observe Additionally, notice that for all , and thus .  As , it follows and . This proves has a two-sided inverse and hence is an isomorphism. In fact, it shows that . Thus for all .   "
},
{
  "id": "subsec-automorphisms-14",
  "level": "2",
  "url": "sec-gphoms.html#subsec-automorphisms-14",
  "type": "Convention",
  "number": "1.89",
  "title": "",
  "body": " In this text is primarily reserved for conjugation automorphisms, where the subscript identifies which element is doing the conjugating.  "
},
{
  "id": "subsec-automorphisms-15",
  "level": "2",
  "url": "sec-gphoms.html#subsec-automorphisms-15",
  "type": "Remark",
  "number": "1.90",
  "title": "",
  "body": " There is a notion of outer automorphisms as well, though we currently lack the tools to define them rigorously.  "
},
{
  "id": "sec-gphoms-5",
  "level": "2",
  "url": "sec-gphoms.html#sec-gphoms-5",
  "type": "Summary",
  "number": "1.5",
  "title": "",
  "body": "   A is a function between groups that preserves certain algebraic structures, such as the operation, identites, and inverses. For the first, see: . For the second and third, see: The set of elements mapped to the identity by a homomorphism is known as its .    A is a bijective homomorphism, and a is an isomorphism from a group to itself. The structures preserved by an isomorphism are known as .    The set of automorphisms of a group forms a group itself: the of the group. See: Specifically, the will prove very important later.    Compositions of homomorphisms, isomorphisms, and automophisms are again homomorphisms, isomorphisms, and automophisms, respectively.    "
},
{
  "id": "sec-subgroups",
  "level": "1",
  "url": "sec-subgroups.html",
  "type": "Section",
  "number": "1.6",
  "title": "Subgroups",
  "body": "Subgroups  Subgroups    I have this fear of falling in front of large groups...that's why I tend not to wear heels.  Taylor Swift  Taylor Swift   Subgroup   A nonempty subset of a group is called a subgroup , denoted , if and only if is a group under the multiplication law of . (groups)  subgroup   A subgroup of a group is a called proper subgroup, denoted , if and only if . proper subgroup  (groups)     Subgroup Tests  subgroup test     One Step Subgroup Test  If a subset of a group is nonempty and satisfies for all , , then is a subgroup.   Two Step Subgroup Test  If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.          Assume is non-empty and for all , .  First, we show associativity. Let (not necessarily distinct, as might not have three distinct elements). As we have . As is a group is satisfies the associative property, and thus . Hence satisfies the associative property as well.  I claim that , and further that is the identity element of . Since is non-empty, there exists some . As for all , setting both and we see Thus . As , we see for any , making the identity element of .  Now I show each element of has an inverse in . Let . By setting and , we see . As is the identity element of , we see , and thus . Hence every element of has an inverse contained in .  Finally, we must show that the restriction of the group operation of to is a well-defined group operation. In other words, given , it must be the case that . Given , from the previous paragraph we know . Thus , which is what we wanted. This means This operation is associative by the axioms for the group . The axioms of a group have now been established for .    Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .        Note that in our proof of we actually proved something stronger along the way. As we showed is the (unique) identity element of any subgroup , it is impossible to have a subgroup with a different identity element than its parent group.   Common Subgroups      and are subroups of , which we call the trivial subgroups of .               for all .     .    The set of all rotations is a subgroup of . Similarly, the set of reflections is also a subgroup.    Let and define . Then for all .       In fact, in the case of , these turn out to be the only subgroups of .  Subgroups of  The only subgroups of are the sets .   Whilst perusing , you may have noticed the following: If you didn't, don't worry. I won't tell anyeone.   Torsion Subgroups      Let be an abelian group. Then the set of elements of finite order, which we denote , is a subgroup of , called the torsion subgroup of . torision subgroup     Show that the torision subgroup may not in fact be a subgroup if is not assumed to be abelian.       Group Homomorphisms and Subgroups     Images are Subgroups  If is a homomorphism of groups, then the image of is a subgroup of .   Kernels are Subgroups  If is a homomorphism of groups, then the kernel of is a subgroup of .   Preimages are Subgroups  If is a group homomorphism and then the preimage of is a subgroup of .       Let be a homomorphism of groups.   First, note that since by , so we know .  Let . Thus and for some . Hence As , we see by the one-step subgroup test .    First, note that since by , so we know .  Let . Then , and we have Thus, if then , making by the one-step subgroup test .    First notice that for all , and thus , as and identity elements are unique. As by , we see .  Let . Thus and there exist such that and . Observe: As , we know by the one-step subgroup test . Thus , and so . Hence by the one-step subgroup test .       Inclusions are Homomorphisms  If is a subgroup of a group , then the inclusion is a group homomorphism.   Special Linear Group   The special linear group with complex entries is defined  special linear group        The special linear group is a subgroup of the general linear group .     The Subgroup Lattice  Properties of Subgroups     Transitivity of Subgroups  If and , then .   Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .   Unions of Subgroups  Let be a group and , subgroups. The set is a subgroup of if and only if or .          Suppose and for groups , and . As we know it is non-empty. For any we know that , as . As as sets, by the .    Let denote any indexing set. For each , let be a subgroup of . I claim is a subgroup of .  First, notice is nonempty, as for all . Let . Then for each we have . As for each , we have . Thus a subgroup by the .    Coming soon!       No Proper Unions  No finite group can be expressed as the union of two proper subgroups.   Part (3) of may prove useful!   Subgroups not Symmetric  In we showed that subgroups form a transitve relation. Prove that the relation is reflexive (it can be one sentence) but not symmetric, and thus not an equivalence relation.   Cayley's Theorem  Cayley's theorem   Every group is isomorphic to a subgroup of .     This is a nearly useless theorem.    Stuck in the Middle    Stay in the center, and you will be ready to move in any direction.   Alan Watts  Center of a Group   The center of a group , often written , is the set of elements of that commute with every element of . That is,   center (of a group)     Center is a Subgroup            is abelian    If , then        Let be a group. First, notice that since for all , we have , and thus .  Let . I claim .  Let , and observe: Thus by the one-step subgroup test .    Properties of  Let be a group.    is abelian.    If , then       Only Element of Order  Let be a group and . If is the only element of order in , then .   Even Order Groups  Every group of even order contains an element of order . This is a direct result of , but proving it is possible with the tools we have.        A is a subset of a group that is also a group under the same operation. The fastest way to show something is a subgroup is with one of the .    The is the subgroup of elements of a group that commute with every other element. See: .     The and image of a group homomorphism are subgroups. See:      "
},
{
  "id": "def-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#def-subgroup",
  "type": "Definition",
  "number": "1.91",
  "title": "Subgroup.",
  "body": "Subgroup   A nonempty subset of a group is called a subgroup , denoted , if and only if is a group under the multiplication law of . (groups)  subgroup   A subgroup of a group is a called proper subgroup, denoted , if and only if . proper subgroup  (groups)    "
},
{
  "id": "thm-subgroup-test",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-test",
  "type": "Theorem",
  "number": "1.92",
  "title": "Subgroup Tests.",
  "body": "Subgroup Tests  subgroup test     One Step Subgroup Test  If a subset of a group is nonempty and satisfies for all , , then is a subgroup.   Two Step Subgroup Test  If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.          Assume is non-empty and for all , .  First, we show associativity. Let (not necessarily distinct, as might not have three distinct elements). As we have . As is a group is satisfies the associative property, and thus . Hence satisfies the associative property as well.  I claim that , and further that is the identity element of . Since is non-empty, there exists some . As for all , setting both and we see Thus . As , we see for any , making the identity element of .  Now I show each element of has an inverse in . Let . By setting and , we see . As is the identity element of , we see , and thus . Hence every element of has an inverse contained in .  Finally, we must show that the restriction of the group operation of to is a well-defined group operation. In other words, given , it must be the case that . Given , from the previous paragraph we know . Thus , which is what we wanted. This means This operation is associative by the axioms for the group . The axioms of a group have now been established for .    Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .      "
},
{
  "id": "subsec-subgroup-basics-5",
  "level": "2",
  "url": "sec-subgroups.html#subsec-subgroup-basics-5",
  "type": "Remark",
  "number": "1.93",
  "title": "",
  "body": " Note that in our proof of we actually proved something stronger along the way. As we showed is the (unique) identity element of any subgroup , it is impossible to have a subgroup with a different identity element than its parent group.  "
},
{
  "id": "ex-common-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#ex-common-subgroups",
  "type": "Example",
  "number": "1.94",
  "title": "Common Subgroups.",
  "body": "Common Subgroups      and are subroups of , which we call the trivial subgroups of .               for all .     .    The set of all rotations is a subgroup of . Similarly, the set of reflections is also a subgroup.    Let and define . Then for all .      "
},
{
  "id": "exe-subgroups-of-z",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroups-of-z",
  "type": "Exercise",
  "number": "1.95",
  "title": "Subgroups of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Subgroups of  The only subgroups of are the sets .  "
},
{
  "id": "exe-torsion-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#exe-torsion-subgroup",
  "type": "Exploration",
  "number": "1.1",
  "title": "Torsion Subgroups.",
  "body": "Torsion Subgroups      Let be an abelian group. Then the set of elements of finite order, which we denote , is a subgroup of , called the torsion subgroup of . torision subgroup     Show that the torision subgroup may not in fact be a subgroup if is not assumed to be abelian.      "
},
{
  "id": "thm-properties-of-group-homoms",
  "level": "2",
  "url": "sec-subgroups.html#thm-properties-of-group-homoms",
  "type": "Theorem",
  "number": "1.96",
  "title": "Group Homomorphisms and Subgroups.",
  "body": "Group Homomorphisms and Subgroups     Images are Subgroups  If is a homomorphism of groups, then the image of is a subgroup of .   Kernels are Subgroups  If is a homomorphism of groups, then the kernel of is a subgroup of .   Preimages are Subgroups  If is a group homomorphism and then the preimage of is a subgroup of .       Let be a homomorphism of groups.   First, note that since by , so we know .  Let . Thus and for some . Hence As , we see by the one-step subgroup test .    First, note that since by , so we know .  Let . Then , and we have Thus, if then , making by the one-step subgroup test .    First notice that for all , and thus , as and identity elements are unique. As by , we see .  Let . Thus and there exist such that and . Observe: As , we know by the one-step subgroup test . Thus , and so . Hence by the one-step subgroup test .      "
},
{
  "id": "exe-group-inclusion-hom",
  "level": "2",
  "url": "sec-subgroups.html#exe-group-inclusion-hom",
  "type": "Exercise",
  "number": "1.97",
  "title": "Inclusions are Homomorphisms.",
  "body": "Inclusions are Homomorphisms  If is a subgroup of a group , then the inclusion is a group homomorphism.  "
},
{
  "id": "def-special-linear-group",
  "level": "2",
  "url": "sec-subgroups.html#def-special-linear-group",
  "type": "Definition",
  "number": "1.98",
  "title": "Special Linear Group.",
  "body": "Special Linear Group   The special linear group with complex entries is defined  special linear group     "
},
{
  "id": "prop-slg-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-slg-subgroup",
  "type": "Proposition",
  "number": "1.99",
  "title": "<span class=\"process-math\">\\(\\SL_n(\\C)\\leq\\GL_n(\\C)\\)<\/span>.",
  "body": "  The special linear group is a subgroup of the general linear group .   "
},
{
  "id": "thm-subgroup-properties",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-properties",
  "type": "Theorem",
  "number": "1.100",
  "title": "Properties of Subgroups.",
  "body": "Properties of Subgroups     Transitivity of Subgroups  If and , then .   Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .   Unions of Subgroups  Let be a group and , subgroups. The set is a subgroup of if and only if or .          Suppose and for groups , and . As we know it is non-empty. For any we know that , as . As as sets, by the .    Let denote any indexing set. For each , let be a subgroup of . I claim is a subgroup of .  First, notice is nonempty, as for all . Let . Then for each we have . As for each , we have . Thus a subgroup by the .    Coming soon!      "
},
{
  "id": "exe-no-proper-unions",
  "level": "2",
  "url": "sec-subgroups.html#exe-no-proper-unions",
  "type": "Exercise",
  "number": "1.101",
  "title": "No Proper Unions.",
  "body": "No Proper Unions  No finite group can be expressed as the union of two proper subgroups.   Part (3) of may prove useful!  "
},
{
  "id": "exe-subgroup-not-symmetric",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroup-not-symmetric",
  "type": "Exercise",
  "number": "1.102",
  "title": "Subgroups not Symmetric.",
  "body": "Subgroups not Symmetric  In we showed that subgroups form a transitve relation. Prove that the relation is reflexive (it can be one sentence) but not symmetric, and thus not an equivalence relation.  "
},
{
  "id": "thm-cayley",
  "level": "2",
  "url": "sec-subgroups.html#thm-cayley",
  "type": "Theorem",
  "number": "1.103",
  "title": "Cayley’s Theorem.",
  "body": "Cayley's Theorem  Cayley's theorem   Every group is isomorphic to a subgroup of .   "
},
{
  "id": "subsec-subgroup-lattice-6",
  "level": "2",
  "url": "sec-subgroups.html#subsec-subgroup-lattice-6",
  "type": "Remark",
  "number": "1.104",
  "title": "",
  "body": " This is a nearly useless theorem.  "
},
{
  "id": "def-group-center",
  "level": "2",
  "url": "sec-subgroups.html#def-group-center",
  "type": "Definition",
  "number": "1.105",
  "title": "Center of a Group.",
  "body": "Center of a Group   The center of a group , often written , is the set of elements of that commute with every element of . That is,   center (of a group)    "
},
{
  "id": "prop-center-is-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-center-is-subgroup",
  "type": "Proposition",
  "number": "1.106",
  "title": "Center is a Subgroup.",
  "body": "Center is a Subgroup            is abelian    If , then        Let be a group. First, notice that since for all , we have , and thus .  Let . I claim .  Let , and observe: Thus by the one-step subgroup test .   "
},
{
  "id": "exe-center-props",
  "level": "2",
  "url": "sec-subgroups.html#exe-center-props",
  "type": "Exercise",
  "number": "1.107",
  "title": "Properties of <span class=\"process-math\">\\(Z(G)\\)<\/span>.",
  "body": "Properties of  Let be a group.    is abelian.    If , then      "
},
{
  "id": "exe-only-element-of-order-2",
  "level": "2",
  "url": "sec-subgroups.html#exe-only-element-of-order-2",
  "type": "Exercise",
  "number": "1.108",
  "title": "Only Element of Order <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": "Only Element of Order  Let be a group and . If is the only element of order in , then .  "
},
{
  "id": "exe-even-groups-order-2",
  "level": "2",
  "url": "sec-subgroups.html#exe-even-groups-order-2",
  "type": "Exercise",
  "number": "1.109",
  "title": "Even Order Groups.",
  "body": "Even Order Groups  Every group of even order contains an element of order . This is a direct result of , but proving it is possible with the tools we have.   "
},
{
  "id": "sec-subgroups-5",
  "level": "2",
  "url": "sec-subgroups.html#sec-subgroups-5",
  "type": "Summary",
  "number": "1.6",
  "title": "",
  "body": "   A is a subset of a group that is also a group under the same operation. The fastest way to show something is a subgroup is with one of the .    The is the subgroup of elements of a group that commute with every other element. See: .     The and image of a group homomorphism are subgroups. See:     "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "2.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
