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
  "id": "sec-gp-generators",
  "level": "1",
  "url": "sec-gp-generators.html",
  "type": "Section",
  "number": "2.1",
  "title": "Generated Subgroups",
  "body": "Generated Subgroups     How often misused words generate misleading thoughts.   Herbert Spencer    Generational Wealth  Generated Subgroup   Given a group and a subset of , the subgroup of generated by , written , is the smallest subgroup of containing . In symbols, The elements of are known as generators , and is called a generating set .  generated subgroup  generator  generating set      In latex , is written using \\langle and is written using \\rangle , though this text recommends the shortcut command \\newcommand{\\gen}[1]{\\langle #1 \\rangle}    Finitely Generated Group   A group is finitely generated provided that , where is a finite set. finitely generated (as a group)     We can describe the elements of explicitly.  Elements of   For a subset of , the elements of can be described as:     For notational simplicity, let . I claim .     Let . Thus , where and .  Since is a subgroup of containing , we see . Additionally, given the group group structure of it is closed under products and inverses, and thus contains . Hence and     I claim is a subgroup of .  First, notice , since we allow and declare the empty product to be .  Let and be arbitrary in . Thus for all . By (2), we have: As as well, we see by the one-step subgroup test .  Since is defined to be the intersection of all subgroups of containing , we have , completing the proof.       Lets look at some examples for context.  Generated Groups      If is a group, then is a generating set of .    The trivial group is generated by the empty set.    If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  . generated cyclic subgroup       for every .          is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,        Generating  Let be prime and be any two distinct reflections in . Then .   Generating  For any integer , the set of column vectors consisting of in the row and elsewhere generate . As you may recall from a linear algebra course, these are called the elementary matrices . (Bonus: what subgroup do the type I elementary matrices generate?)   We look now at generating ; the following lemma will be helpful.    For and distinct intgers we have (Note that the right-hand cycle is a cycle since is one-to-one.)    To prove this, evaluate both sides at for any and observe that one gets (with the supscript taken modulo ) both times. This proves they agree on the set . If is not in this set, then fixes so the left-hand side fixes . So does the right, since . Thus the two functions coincide on elements.    Generating   For prove that is generated by and the -cycle .     This theorem will prove surprisingly useful all the way down in , saving us a lot of time with our proof of unsolvable quintic polyomials.    Note that in we showed is generated by transpositions.   Lets look at another example.  Commutator Subgroup  Let be a group, , and . This is known as the commutator subgroup  commutator subgroup of .     Commutator subgroups prove invaluable when it comes to something called abelianization , which is, loosely speaking, a way of \"modding out\" the non-commutative part of to obtain a new group that is abelian. This is seen rigorously in .   A nice property of a is that once you've located the generators, you've found the whole group:  Generators of Subgroups   If is a subgroup of that contains , then .    In this way, if we can understand something about the generators of a group, we can (for the most part) extend that knowledge to the group as a whole. This is something you may have seen in the form of a basis, either for a vector space or a topological space.      For a subset of a group, the of is the smallest subgroup containing .     . See: .     Two prominent examples are and .     "
},
{
  "id": "def-gensubgroup",
  "level": "2",
  "url": "sec-gp-generators.html#def-gensubgroup",
  "type": "Definition",
  "number": "2.1",
  "title": "Generated Subgroup.",
  "body": "Generated Subgroup   Given a group and a subset of , the subgroup of generated by , written , is the smallest subgroup of containing . In symbols, The elements of are known as generators , and is called a generating set .  generated subgroup  generator  generating set    "
},
{
  "id": "def-fg-group",
  "level": "2",
  "url": "sec-gp-generators.html#def-fg-group",
  "type": "Definition",
  "number": "2.2",
  "title": "Finitely Generated Group.",
  "body": "Finitely Generated Group   A group is finitely generated provided that , where is a finite set. finitely generated (as a group)    "
},
{
  "id": "lem-gensubgp",
  "level": "2",
  "url": "sec-gp-generators.html#lem-gensubgp",
  "type": "Lemma",
  "number": "2.3",
  "title": "Elements of <span class=\"process-math\">\\(\\igen S\\)<\/span>.",
  "body": "Elements of   For a subset of , the elements of can be described as:     For notational simplicity, let . I claim .     Let . Thus , where and .  Since is a subgroup of containing , we see . Additionally, given the group group structure of it is closed under products and inverses, and thus contains . Hence and     I claim is a subgroup of .  First, notice , since we allow and declare the empty product to be .  Let and be arbitrary in . Thus for all . By (2), we have: As as well, we see by the one-step subgroup test .  Since is defined to be the intersection of all subgroups of containing , we have , completing the proof.      "
},
{
  "id": "ex-group-gen",
  "level": "2",
  "url": "sec-gp-generators.html#ex-group-gen",
  "type": "Example",
  "number": "2.4",
  "title": "Generated Groups.",
  "body": "Generated Groups      If is a group, then is a generating set of .    The trivial group is generated by the empty set.    If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  . generated cyclic subgroup       for every .          is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,       "
},
{
  "id": "exe-d2p",
  "level": "2",
  "url": "sec-gp-generators.html#exe-d2p",
  "type": "Exercise",
  "number": "2.5",
  "title": "Generating <span class=\"process-math\">\\(D_{2p}\\)<\/span>.",
  "body": "Generating  Let be prime and be any two distinct reflections in . Then .  "
},
{
  "id": "generating-gl",
  "level": "2",
  "url": "sec-gp-generators.html#generating-gl",
  "type": "Exercise",
  "number": "2.6",
  "title": "Generating <span class=\"process-math\">\\(\\GL_n(\\R)\\)<\/span>.",
  "body": "Generating  For any integer , the set of column vectors consisting of in the row and elsewhere generate . As you may recall from a linear algebra course, these are called the elementary matrices . (Bonus: what subgroup do the type I elementary matrices generate?)  "
},
{
  "id": "lem-generating-sn",
  "level": "2",
  "url": "sec-gp-generators.html#lem-generating-sn",
  "type": "Lemma",
  "number": "2.7",
  "title": "",
  "body": "  For and distinct intgers we have (Note that the right-hand cycle is a cycle since is one-to-one.)    To prove this, evaluate both sides at for any and observe that one gets (with the supscript taken modulo ) both times. This proves they agree on the set . If is not in this set, then fixes so the left-hand side fixes . So does the right, since . Thus the two functions coincide on elements.   "
},
{
  "id": "thm-generating-sn",
  "level": "2",
  "url": "sec-gp-generators.html#thm-generating-sn",
  "type": "Theorem",
  "number": "2.8",
  "title": "Generating <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Generating   For prove that is generated by and the -cycle .   "
},
{
  "id": "subsec-gp-gensub-14",
  "level": "2",
  "url": "sec-gp-generators.html#subsec-gp-gensub-14",
  "type": "Remark",
  "number": "2.9",
  "title": "",
  "body": " This theorem will prove surprisingly useful all the way down in , saving us a lot of time with our proof of unsolvable quintic polyomials.  "
},
{
  "id": "subsec-gp-gensub-15",
  "level": "2",
  "url": "sec-gp-generators.html#subsec-gp-gensub-15",
  "type": "Remark",
  "number": "2.10",
  "title": "",
  "body": " Note that in we showed is generated by transpositions.  "
},
{
  "id": "ex-commutator-subgroup",
  "level": "2",
  "url": "sec-gp-generators.html#ex-commutator-subgroup",
  "type": "Example",
  "number": "2.11",
  "title": "Commutator Subgroup.",
  "body": "Commutator Subgroup  Let be a group, , and . This is known as the commutator subgroup  commutator subgroup of .   "
},
{
  "id": "subsec-gp-gensub-18",
  "level": "2",
  "url": "sec-gp-generators.html#subsec-gp-gensub-18",
  "type": "Remark",
  "number": "2.12",
  "title": "",
  "body": " Commutator subgroups prove invaluable when it comes to something called abelianization , which is, loosely speaking, a way of \"modding out\" the non-commutative part of to obtain a new group that is abelian. This is seen rigorously in .  "
},
{
  "id": "prop-generators-of-subgroup",
  "level": "2",
  "url": "sec-gp-generators.html#prop-generators-of-subgroup",
  "type": "Proposition",
  "number": "2.13",
  "title": "Generators of Subgroups.",
  "body": "Generators of Subgroups   If is a subgroup of that contains , then .   "
},
{
  "id": "sec-gp-generators-4",
  "level": "2",
  "url": "sec-gp-generators.html#sec-gp-generators-4",
  "type": "Summary",
  "number": "2.1",
  "title": "",
  "body": "   For a subset of a group, the of is the smallest subgroup containing .     . See: .     Two prominent examples are and .    "
},
{
  "id": "sec-cyclic",
  "level": "1",
  "url": "sec-cyclic.html",
  "type": "Section",
  "number": "2.2",
  "title": "Cyclic Groups",
  "body": "Cyclic Groups  Definition and First Properties    Madness is the exception in individuals and the rule in groups.   Friedrich Nietzsche   We zoom in now on the wondrous case in which a group can be generated by a single element.  Cylic Group   If is a generated by a single element, i.e. for some , then is called a cyclic group . cyclic group     Recalling , we can describe the elements of a cylic group explicitely.  Elements of   For an element of , the elements of can be described as: .    By , the group has the following elements .  First, we show . I claim each of the elements are distinct. Indeed, if and then and , contradicting the minimality of the order of .  Next, we show . I claim (this implies ). Indeed, for any  division by yields integers with such that . Then .    One quick way of seeing if a finite group is cyclic is to find an element with the same order as the group.  Cyclic iff Element of Order   Let be a finite group. Then is cyclic if and only if there exists an such that     Cyclic Groups       is a cyclic group.     is a cyclic group.           , for example.     , such that        Not Quite Cyclic Groups     Prove that is not a cyclic group.    Prove that is not cyclic.      Generators of cyclic groups are not necessarily unique.  Cyclic Generators are not Unique  Let be a cyclic group. Then .   Here is a more general criteria for determining when an element of a cyclic group is a generator.  Criteria for Cyclic Generators   Let be a cyclic group of order , and let . Then generates if and only if .    Conveniently enough, cyclic groups are always abelian.  Cyclic Groups are Abelian   Every cyclic group is abelian.    Suppose is a cylic group, and let . As is cyclic, for some . By , . Thus and for some . Observe: Hence is abelian.    Roots of Unity  For a fixed , is a subgroup of . Since and so if , then and hence for some real number . Moreover, implies that is an integer multiple of . It follows that and that generates . So, is cyclic or order . It is therefore isomorphic to , via the map .   One of the first things one does when encountering a new group is to examine its subgroups. As it turns out, cyclic groups have some very special properties when it comes to subgroups, though proving them will be more technical than anything we have encountered thus far.  Finally, we end with two results that will prove invaluable later in the course. Though we won't see them for some time, proving them now will be good practice and save us time later on.    The automorphism group of is isomorphic to the multiplicative group of units of via the map where .    In particular:    If is prime the automorphism group of is cyclic, namely .     Subgroups of Cyclic Groups  Generating Subgroups of Cyclic Groups   Let , where has finite order . For any , setting gives that .    Since any element of is of the form for some . By the  for some , . Since and are elements of , . Since and , by the minimality of it follows that cannot be positive and thus . Therefore and we have shown that . The opposite containment follows because and is the smallest subgroup of containing . Thus .    Subgroups of Cyclic Groups   Let , where has finite order . Then there is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.    Let and be given by . I claim that for any divisor of , we have .  We have .  For any subgroup of , we have .  By any is either , for which or is of the form . In the latter case, setting we have and . It remains to show that . By Bézout's Identity, for some integers . Since if follows that . On the other hand is a multiple of so and thus . Finally, we conclude that for any .  Thus is a two sided inverse to , making a bijection.    latex :  In latex , is written using \\Psi .   Cyclic Groups of Small Order     Every group of orders are cyclic.    Every abelian group of order is cyclic.       Uniqueness of Cyclic Groups    There is no way to be in cyclic existence without creating the causes of suffering.   Jetsunma Ahkon Lhamo   Universal Mapping Property for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any . UMP for a cyclic group     Recall that either (with no repetitions) if or (with no repetitions) if .   Uniqueness: We show that if is a group homomorphism, then for all .     if then     if then     if then , using the formula above for       Existence: In either case, define for all relevant (i.e., in the first case, for and in the second for all ). We need to show this function is a well-defined group homomorphism. To see that is well defined, suppose for some . Then, since , using or the definition for order we have Thus, if then .  The homomorphism property is immediate: .     This is a particular case of the universal mapping property of a presentation, since a cyclic group is either presented by or .   Classification Theorem for Cyclic Groups  classification of cyclic groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to .    Suppose with or and set in the first case and in the second case. Then by , there are homomorphisms and such that and . So is an endomorphism (e.g. a homomorphism from a group to itself) of mapping to . But the identity map also has this property, and so the uniqueness clause gives . Similarly, .     Moving forward, it is customary to denote the cyclic group of order with the notation . We similarly denote the infinite cyclic group .         A is a group generated by one element. Thus . See:     An element generates a cyclic group if its order is equal to or relatively prime to the order of the group. See: . A finite group is cyclic if there exists an element with the same order as the group. See: .      ; all subgroups of a cyclic group are cyclic and there is a unique subgroup of each order. See:     Every infinite cyclic group is isomorphic to , and every cyclic group of order is isomorphic to . This is known as the .     ; in particular, . See: and .      "
},
{
  "id": "def-cyclic-group",
  "level": "2",
  "url": "sec-cyclic.html#def-cyclic-group",
  "type": "Definition",
  "number": "2.14",
  "title": "Cylic Group.",
  "body": "Cylic Group   If is a generated by a single element, i.e. for some , then is called a cyclic group . cyclic group    "
},
{
  "id": "cor-cyclic-subgroup",
  "level": "2",
  "url": "sec-cyclic.html#cor-cyclic-subgroup",
  "type": "Corollary",
  "number": "2.15",
  "title": "Elements of <span class=\"process-math\">\\(\\igen x\\)<\/span>.",
  "body": "Elements of   For an element of , the elements of can be described as: .    By , the group has the following elements .  First, we show . I claim each of the elements are distinct. Indeed, if and then and , contradicting the minimality of the order of .  Next, we show . I claim (this implies ). Indeed, for any  division by yields integers with such that . Then .   "
},
{
  "id": "prop-cyclic-equivalencies",
  "level": "2",
  "url": "sec-cyclic.html#prop-cyclic-equivalencies",
  "type": "Proposition",
  "number": "2.16",
  "title": "Cyclic iff Element of Order <span class=\"process-math\">\\(|G|\\)<\/span>.",
  "body": "Cyclic iff Element of Order   Let be a finite group. Then is cyclic if and only if there exists an such that    "
},
{
  "id": "ex-cyclic-examples",
  "level": "2",
  "url": "sec-cyclic.html#ex-cyclic-examples",
  "type": "Example",
  "number": "2.17",
  "title": "Cyclic Groups.",
  "body": "Cyclic Groups       is a cyclic group.     is a cyclic group.           , for example.     , such that       "
},
{
  "id": "exe-not-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#exe-not-cyclic",
  "type": "Exercise",
  "number": "2.18",
  "title": "Not Quite Cyclic Groups.",
  "body": "Not Quite Cyclic Groups     Prove that is not a cyclic group.    Prove that is not cyclic.     "
},
{
  "id": "exe-non-unique-cyclic-generators",
  "level": "2",
  "url": "sec-cyclic.html#exe-non-unique-cyclic-generators",
  "type": "Exercise",
  "number": "2.19",
  "title": "Cyclic Generators are not Unique.",
  "body": "Cyclic Generators are not Unique  Let be a cyclic group. Then .  "
},
{
  "id": "thm-cyclic-criteria",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-criteria",
  "type": "Theorem",
  "number": "2.20",
  "title": "Criteria for Cyclic Generators.",
  "body": "Criteria for Cyclic Generators   Let be a cyclic group of order , and let . Then generates if and only if .   "
},
{
  "id": "thm-cyclic-abelian",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-abelian",
  "type": "Theorem",
  "number": "2.21",
  "title": "Cyclic Groups are Abelian.",
  "body": "Cyclic Groups are Abelian   Every cyclic group is abelian.    Suppose is a cylic group, and let . As is cyclic, for some . By , . Thus and for some . Observe: Hence is abelian.   "
},
{
  "id": "ex-group-of-unity",
  "level": "2",
  "url": "sec-cyclic.html#ex-group-of-unity",
  "type": "Example",
  "number": "2.22",
  "title": "Roots of Unity.",
  "body": "Roots of Unity  For a fixed , is a subgroup of . Since and so if , then and hence for some real number . Moreover, implies that is an integer multiple of . It follows that and that generates . So, is cyclic or order . It is therefore isomorphic to , via the map .  "
},
{
  "id": "prop-aut-cn",
  "level": "2",
  "url": "sec-cyclic.html#prop-aut-cn",
  "type": "Proposition",
  "number": "2.23",
  "title": "<span class=\"process-math\">\\(\\Aut(C_n)\\)<\/span>.",
  "body": "  The automorphism group of is isomorphic to the multiplicative group of units of via the map where .   "
},
{
  "id": "cor-aut-cp",
  "level": "2",
  "url": "sec-cyclic.html#cor-aut-cp",
  "type": "Corollary",
  "number": "2.24",
  "title": "<span class=\"process-math\">\\(\\Aut(C_p)\\)<\/span>.",
  "body": "  If is prime the automorphism group of is cyclic, namely .   "
},
{
  "id": "lem-cyclic-sub-gen",
  "level": "2",
  "url": "sec-cyclic.html#lem-cyclic-sub-gen",
  "type": "Lemma",
  "number": "2.25",
  "title": "Generating Subgroups of Cyclic Groups.",
  "body": "Generating Subgroups of Cyclic Groups   Let , where has finite order . For any , setting gives that .    Since any element of is of the form for some . By the  for some , . Since and are elements of , . Since and , by the minimality of it follows that cannot be positive and thus . Therefore and we have shown that . The opposite containment follows because and is the smallest subgroup of containing . Thus .   "
},
{
  "id": "thm-cyclic-divisors-and-subgroups",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-divisors-and-subgroups",
  "type": "Theorem",
  "number": "2.26",
  "title": "Subgroups of Cyclic Groups.",
  "body": "Subgroups of Cyclic Groups   Let , where has finite order . Then there is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.    Let and be given by . I claim that for any divisor of , we have .  We have .  For any subgroup of , we have .  By any is either , for which or is of the form . In the latter case, setting we have and . It remains to show that . By Bézout's Identity, for some integers . Since if follows that . On the other hand is a multiple of so and thus . Finally, we conclude that for any .  Thus is a two sided inverse to , making a bijection.   "
},
{
  "id": "exe-small-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#exe-small-cyclic",
  "type": "Exercise",
  "number": "2.27",
  "title": "Cyclic Groups of Small Order.",
  "body": "Cyclic Groups of Small Order     Every group of orders are cyclic.    Every abelian group of order is cyclic.     "
},
{
  "id": "prop-ump-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#prop-ump-cyclic",
  "type": "Proposition",
  "number": "2.28",
  "title": "Universal Mapping Property for Cyclic Groups.",
  "body": "Universal Mapping Property for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any . UMP for a cyclic group     Recall that either (with no repetitions) if or (with no repetitions) if .   Uniqueness: We show that if is a group homomorphism, then for all .     if then     if then     if then , using the formula above for       Existence: In either case, define for all relevant (i.e., in the first case, for and in the second for all ). We need to show this function is a well-defined group homomorphism. To see that is well defined, suppose for some . Then, since , using or the definition for order we have Thus, if then .  The homomorphism property is immediate: .   "
},
{
  "id": "subsec-cyclic-uniqueness-4",
  "level": "2",
  "url": "sec-cyclic.html#subsec-cyclic-uniqueness-4",
  "type": "Remark",
  "number": "2.29",
  "title": "",
  "body": " This is a particular case of the universal mapping property of a presentation, since a cyclic group is either presented by or .  "
},
{
  "id": "thm-cyclic-classification",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-classification",
  "type": "Theorem",
  "number": "2.30",
  "title": "Classification Theorem for Cyclic Groups.",
  "body": "Classification Theorem for Cyclic Groups  classification of cyclic groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to .    Suppose with or and set in the first case and in the second case. Then by , there are homomorphisms and such that and . So is an endomorphism (e.g. a homomorphism from a group to itself) of mapping to . But the identity map also has this property, and so the uniqueness clause gives . Similarly, .   "
},
{
  "id": "subsec-cyclic-uniqueness-6",
  "level": "2",
  "url": "sec-cyclic.html#subsec-cyclic-uniqueness-6",
  "type": "Convention",
  "number": "2.31",
  "title": "",
  "body": " Moving forward, it is customary to denote the cyclic group of order with the notation . We similarly denote the infinite cyclic group .    "
},
{
  "id": "sec-cyclic-5",
  "level": "2",
  "url": "sec-cyclic.html#sec-cyclic-5",
  "type": "Summary",
  "number": "2.2",
  "title": "",
  "body": "   A is a group generated by one element. Thus . See:     An element generates a cyclic group if its order is equal to or relatively prime to the order of the group. See: . A finite group is cyclic if there exists an element with the same order as the group. See: .      ; all subgroups of a cyclic group are cyclic and there is a unique subgroup of each order. See:     Every infinite cyclic group is isomorphic to , and every cyclic group of order is isomorphic to . This is known as the .     ; in particular, . See: and .     "
},
{
  "id": "sec-cosets",
  "level": "1",
  "url": "sec-cosets.html",
  "type": "Section",
  "number": "3.1",
  "title": "Cosets and Lagrange’s Theorem",
  "body": "Cosets and Lagrange's Theorem  Cosets    If I had inherited a fortune I should probably not have cast my lot with mathematics.   Joseph-Louis Lagrange   Cosets   For any and any let be defined as a left coset and right coset of in , respectively. coset  left coset  right coset     Abelian Cosets  If is an abelian then for all .    Though mostly a matter of preference, we will focus primarily on left cosets.   Basic Coset Properties   Let and          if and only if             Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.      For any and any , the set of (left) cosets induces an equivalence relation on , where two elements are related if they belong to the same left coset of in .    Cosets Partition a Group   For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . We see is onto and if then and hence , so that is also one-to-one.    Lagrange's Theorem  Lagrange's theorem   If is a finite group and , then In particular, divides .     The Index of a Subgroup  Index   In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .  index     Cosets in  For and , the left cosets of in are and the right cosets are Note that these lists are not the same, but they do have the same length. We have , and .   Now that we have proved , a host of other results now become available to us.  Corollaries to Lagrange's Theorem   Let be a finite group.   If , then divides .         If then for all        The notion of index is most useful when it is finite, but note that this does not require that to be finite.  Finite Index in Infinite Group  Let and . Then since the cosets are . (Since is abelian, left and right cosets are automatically the same by )   Number of Left and Right Cosets (Ininite Version)  Show that even if is not finite the number of left and right cosets of a subgroup is still the same.   Consider the map and show it's a bijection. Why is the inverse needed?   This seems like it might be important.  The Index Tower  index tower   Let be a group (possibly infinite) and subgroups of . Suppose is finite. Then .    Here are some more corollaries to .   Let be a group of composite order. Then contains a non-trivial proper subgroup.   Fermat's Little Theorem  Prove Fermat's Little Theorem: for every integer and every prime , . Fermat's little theorem    If you can believe it, there's actually another important corollary to , but we'll cover it when its more relevant. Wouldn't want to spoil all the fun at once, right? To spoil all the fun at once, see: , part (1).       For any and any , a left and right of in is defined to be     The set of cosets partitions the group and induces an equivlance relation where two elements are related if they belong to the same coset. See: and .     All cosets have the same cardinality, and there are an equal number of left and right cosets. See: and . The number of cosets is called the .     states that the order of any subgroup divides the order of the group, and thus that the order of an element must also divide the order of the group. This is one of the seminal results in group theory.     "
},
{
  "id": "def-coset",
  "level": "2",
  "url": "sec-cosets.html#def-coset",
  "type": "Definition",
  "number": "3.1",
  "title": "Cosets.",
  "body": "Cosets   For any and any let be defined as a left coset and right coset of in , respectively. coset  left coset  right coset    "
},
{
  "id": "exe-abelian-cosets",
  "level": "2",
  "url": "sec-cosets.html#exe-abelian-cosets",
  "type": "Exercise",
  "number": "3.2",
  "title": "Abelian Cosets.",
  "body": "Abelian Cosets  If is an abelian then for all .  "
},
{
  "id": "prop-coset-properties",
  "level": "2",
  "url": "sec-cosets.html#prop-coset-properties",
  "type": "Proposition",
  "number": "3.3",
  "title": "Basic Coset Properties.",
  "body": "Basic Coset Properties   Let and          if and only if            "
},
{
  "id": "lem-cosetfacts",
  "level": "2",
  "url": "sec-cosets.html#lem-cosetfacts",
  "type": "Lemma",
  "number": "3.4",
  "title": "Coset Equivalencies.",
  "body": "Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.   "
},
{
  "id": "thm-coset-equivalence-relation",
  "level": "2",
  "url": "sec-cosets.html#thm-coset-equivalence-relation",
  "type": "Theorem",
  "number": "3.5",
  "title": "",
  "body": "  For any and any , the set of (left) cosets induces an equivalence relation on , where two elements are related if they belong to the same left coset of in .   "
},
{
  "id": "cor-cosetpartition",
  "level": "2",
  "url": "sec-cosets.html#cor-cosetpartition",
  "type": "Corollary",
  "number": "3.6",
  "title": "Cosets Partition a Group.",
  "body": "Cosets Partition a Group   For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . We see is onto and if then and hence , so that is also one-to-one.   "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "sec-cosets.html#thm-lagrange",
  "type": "Theorem",
  "number": "3.7",
  "title": "Lagrange’s Theorem.",
  "body": "Lagrange's Theorem  Lagrange's theorem   If is a finite group and , then In particular, divides .   "
},
{
  "id": "def-index",
  "level": "2",
  "url": "sec-cosets.html#def-index",
  "type": "Definition",
  "number": "3.8",
  "title": "Index.",
  "body": "Index   In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .  index    "
},
{
  "id": "ex-d2n-cosets",
  "level": "2",
  "url": "sec-cosets.html#ex-d2n-cosets",
  "type": "Example",
  "number": "3.9",
  "title": "Cosets in <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Cosets in  For and , the left cosets of in are and the right cosets are Note that these lists are not the same, but they do have the same length. We have , and .  "
},
{
  "id": "cor-lagrange",
  "level": "2",
  "url": "sec-cosets.html#cor-lagrange",
  "type": "Corollary",
  "number": "3.10",
  "title": "Corollaries to Lagrange’s Theorem.",
  "body": "Corollaries to Lagrange's Theorem   Let be a finite group.   If , then divides .         If then for all       "
},
{
  "id": "ex-z-cosets",
  "level": "2",
  "url": "sec-cosets.html#ex-z-cosets",
  "type": "Example",
  "number": "3.11",
  "title": "Finite Index in Infinite Group.",
  "body": "Finite Index in Infinite Group  Let and . Then since the cosets are . (Since is abelian, left and right cosets are automatically the same by )  "
},
{
  "id": "exe-left-right-cosets",
  "level": "2",
  "url": "sec-cosets.html#exe-left-right-cosets",
  "type": "Exercise",
  "number": "3.12",
  "title": "Number of Left and Right Cosets (Ininite Version).",
  "body": "Number of Left and Right Cosets (Ininite Version)  Show that even if is not finite the number of left and right cosets of a subgroup is still the same.   Consider the map and show it's a bijection. Why is the inverse needed?  "
},
{
  "id": "thm-index-tower",
  "level": "2",
  "url": "sec-cosets.html#thm-index-tower",
  "type": "Theorem",
  "number": "3.13",
  "title": "The Index Tower.",
  "body": "The Index Tower  index tower   Let be a group (possibly infinite) and subgroups of . Suppose is finite. Then .   "
},
{
  "id": "exe-nontrivial-subgroup",
  "level": "2",
  "url": "sec-cosets.html#exe-nontrivial-subgroup",
  "type": "Exercise",
  "number": "3.14",
  "title": "",
  "body": " Let be a group of composite order. Then contains a non-trivial proper subgroup.  "
},
{
  "id": "exe-fermat",
  "level": "2",
  "url": "sec-cosets.html#exe-fermat",
  "type": "Exercise",
  "number": "3.15",
  "title": "Fermat’s Little Theorem.",
  "body": "Fermat's Little Theorem  Prove Fermat's Little Theorem: for every integer and every prime , . Fermat's little theorem   "
},
{
  "id": "sec-cosets-4",
  "level": "2",
  "url": "sec-cosets.html#sec-cosets-4",
  "type": "Summary",
  "number": "3.1",
  "title": "",
  "body": "   For any and any , a left and right of in is defined to be     The set of cosets partitions the group and induces an equivlance relation where two elements are related if they belong to the same coset. See: and .     All cosets have the same cardinality, and there are an equal number of left and right cosets. See: and . The number of cosets is called the .     states that the order of any subgroup divides the order of the group, and thus that the order of an element must also divide the order of the group. This is one of the seminal results in group theory.    "
},
{
  "id": "sec-normal-subgroups",
  "level": "1",
  "url": "sec-normal-subgroups.html",
  "type": "Section",
  "number": "3.2",
  "title": "Normal Subgroups",
  "body": "Normal Subgroups  The New Normal    If you are always trying to be normal, you will never know how amazing you can be.   Maya Angelou   Sometimes it is convenient to ignore a certain subobject of a given object and to focus on the remaining properties. Formally, this is done by taking quotients . In contrast to the theory of vector spaces, where the quotient of any vector space by any subspace again naturally forms a vector space, we have to be a little bit more careful in the world of groups. Only special subgroups lead to quotient groups :  Normal Subgroup   A subgroup of a group is normal in , written , if for all . normal subgroup       In latex , is written using \\unlhd , though this text uses the command \\def\\nsg{\\unlhd} , where nsg stands for normal subgroup    Anything but Normal   Come up with a better name for normal subgroups than 'normal subgroup'. Give it some oomph. Make it mean something.    Here are some options the author has recently become partial to:    Semiabelian : Yes, its more letters, but so are semigroup, semisimple, semidirect, and semicircle. Imagine if we called all those things normal too! It would be a nightmare. And we would deserve it for our hubris.     Ideal subgroup : Look, its shorter! Normal subgroups and ideals parallel ideas in group and ring theory, and relabeling normal groups in this way would cement these similarities.       However, there are many ways to characterize normal subgroups.  Equivalent Normal Characterizations   Let be a subgroup of a group . The following are equivalent:         for all .     for all .    The equivalence relations on determined by the left and right cosets of coincide.       Arguably, the most important and \/ or intuitive characterization of normal subgroups comes from their relation to homomorphisms. Indeed, though we currenly lack the tools to prove it, tells us that a subgroup is normal if and only if it is the kernel of some homomorphism. Thus, in addition to its necessity in the definition of quotients, a normal subgroup is a simple and unique way to characterize any homomorphism.  Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .     for all .     .     .     .    The commutator subgroup from is normal in .    The set is normal in .      Closure Properties of Normal Subgroups   Normalility is preserved under taking intersections and preimages.    Normality is not Transitive  Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider From we have . The group has order , making it ableian from . Thus every subgroup of is normal in by .  Now consider the subgroup . But is not normal in , since for example    Normal Preimages   If is a group homomorphism and then the preimage of , , is a normal subgroup of .    Images not Normal in General  Show that if is a group homomorphism and then need not be a normal subgroup of .   Here is a theorem that will prove exceedingly useful all the way down in .  Unique Order Subgroup is Normal   Let be the only subgroup of order . Then is normal.    We also have some criteria for when a generated subgroup is normal.  Normality and Generated Subgroups  Let be a group and a subset of . Suppose . Prove if and only if for every and .   Or, if we're tired of generating subgroups that aren't as normal as we'd like them to be, we can generate a normal subgroup explicitely.  Generated Normal Subgroup  Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as  generated normal subgroup       We conclude this section by taking a sneak peak at the interactions between the index of a subgroup and its normality.  Subgroup of Index is Normal   Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Coming soon to an OER near you!     This is a specific case of , a much more powerful theorem that we will prove later on, but we can tackle this smaller piece with the tools we have now.   Converse to Lagrange's Theorem is False Lagrange's theorem (converse is false)  Prove the converse to is false: find a group and an integer such that divides the order of but does not have any subgroups of order .   Take .   Consider , and note that . Suppose by way of contradiction that is subgroup of such that . Notice that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .     Qual Watch  Providing such an example as in was Part (b) of on the qualifying exam.       A subgroup is a if for all , though there are several .    Abelian subgroups are always normal; in particular, the center of a group is always normal.    If a is the only subgroup of order , then . See: .     The .     "
},
{
  "id": "def-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#def-normal-subgroup",
  "type": "Definition",
  "number": "3.16",
  "title": "Normal Subgroup.",
  "body": "Normal Subgroup   A subgroup of a group is normal in , written , if for all . normal subgroup     "
},
{
  "id": "exe-anything-but-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-anything-but-normal",
  "type": "Discussion",
  "number": "3.1",
  "title": "Anything but Normal.",
  "body": "Anything but Normal   Come up with a better name for normal subgroups than 'normal subgroup'. Give it some oomph. Make it mean something.    Here are some options the author has recently become partial to:    Semiabelian : Yes, its more letters, but so are semigroup, semisimple, semidirect, and semicircle. Imagine if we called all those things normal too! It would be a nightmare. And we would deserve it for our hubris.     Ideal subgroup : Look, its shorter! Normal subgroups and ideals parallel ideas in group and ring theory, and relabeling normal groups in this way would cement these similarities.      "
},
{
  "id": "thm-equivdef-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#thm-equivdef-normal",
  "type": "Theorem",
  "number": "3.17",
  "title": "Equivalent Normal Characterizations.",
  "body": "Equivalent Normal Characterizations   Let be a subgroup of a group . The following are equivalent:         for all .     for all .    The equivalence relations on determined by the left and right cosets of coincide.      "
},
{
  "id": "ex-normal-examples",
  "level": "2",
  "url": "sec-normal-subgroups.html#ex-normal-examples",
  "type": "Example",
  "number": "3.18",
  "title": "Normal Subgroups.",
  "body": "Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .     for all .     .     .     .    The commutator subgroup from is normal in .    The set is normal in .     "
},
{
  "id": "thm-normal-subgroup-cps",
  "level": "2",
  "url": "sec-normal-subgroups.html#thm-normal-subgroup-cps",
  "type": "Theorem",
  "number": "3.19",
  "title": "Closure Properties of Normal Subgroups.",
  "body": "Closure Properties of Normal Subgroups   Normalility is preserved under taking intersections and preimages.   "
},
{
  "id": "exe-normality-not-transitive",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-normality-not-transitive",
  "type": "Exercise",
  "number": "3.20",
  "title": "Normality is not Transitive.",
  "body": "Normality is not Transitive  Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider From we have . The group has order , making it ableian from . Thus every subgroup of is normal in by .  Now consider the subgroup . But is not normal in , since for example   "
},
{
  "id": "prop-normal-subgroups-and-homomorphisms",
  "level": "2",
  "url": "sec-normal-subgroups.html#prop-normal-subgroups-and-homomorphisms",
  "type": "Proposition",
  "number": "3.21",
  "title": "Normal Preimages.",
  "body": "Normal Preimages   If is a group homomorphism and then the preimage of , , is a normal subgroup of .   "
},
{
  "id": "exe-images-need-not-be-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-images-need-not-be-normal",
  "type": "Exercise",
  "number": "3.22",
  "title": "Images not Normal in General.",
  "body": "Images not Normal in General  Show that if is a group homomorphism and then need not be a normal subgroup of .  "
},
{
  "id": "thm-unique-order-subgroup-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#thm-unique-order-subgroup-normal",
  "type": "Theorem",
  "number": "3.23",
  "title": "Unique Order Subgroup is Normal.",
  "body": "Unique Order Subgroup is Normal   Let be the only subgroup of order . Then is normal.   "
},
{
  "id": "exe-normality-and-generated-subgroups",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-normality-and-generated-subgroups",
  "type": "Exercise",
  "number": "3.24",
  "title": "Normality and Generated Subgroups.",
  "body": "Normality and Generated Subgroups  Let be a group and a subset of . Suppose . Prove if and only if for every and .  "
},
{
  "id": "exe-generated-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-generated-normal-subgroup",
  "type": "Exercise",
  "number": "3.25",
  "title": "Generated Normal Subgroup.",
  "body": "Generated Normal Subgroup  Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as  generated normal subgroup      "
},
{
  "id": "exe-subgroup-index-2-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-subgroup-index-2-normal",
  "type": "Proposition",
  "number": "3.26",
  "title": "Subgroup of Index <span class=\"process-math\">\\(2\\)<\/span> is Normal.",
  "body": "Subgroup of Index is Normal   Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Coming soon to an OER near you!   "
},
{
  "id": "subsec-normal-23",
  "level": "2",
  "url": "sec-normal-subgroups.html#subsec-normal-23",
  "type": "Remark",
  "number": "3.27",
  "title": "",
  "body": " This is a specific case of , a much more powerful theorem that we will prove later on, but we can tackle this smaller piece with the tools we have now.  "
},
{
  "id": "exe-lagrange-converse-false",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-lagrange-converse-false",
  "type": "Exercise",
  "number": "3.28",
  "title": "Converse to Lagrange’s Theorem is False.",
  "body": "Converse to Lagrange's Theorem is False Lagrange's theorem (converse is false)  Prove the converse to is false: find a group and an integer such that divides the order of but does not have any subgroups of order .   Take .   Consider , and note that . Suppose by way of contradiction that is subgroup of such that . Notice that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .    "
},
{
  "id": "sec-normal-subgroups-3",
  "level": "2",
  "url": "sec-normal-subgroups.html#sec-normal-subgroups-3",
  "type": "Summary",
  "number": "3.2",
  "title": "",
  "body": "   A subgroup is a if for all , though there are several .    Abelian subgroups are always normal; in particular, the center of a group is always normal.    If a is the only subgroup of order , then . See: .     The .    "
},
{
  "id": "sec-quotient-groups",
  "level": "1",
  "url": "sec-quotient-groups.html",
  "type": "Section",
  "number": "3.3",
  "title": "Quotient Groups",
  "body": "Quotient Groups  Quotient Groups    Great things are done by a series of small things brought together.   Vincent Van Gogh   We return now to the equivalence relation induced by the set of left (or right) cosets on a group .  Let us ask a question: When does aquire the structure of a group under the operation We need to be worried about whether this operation is independent of choice. That is, if and then must ? In other words, if and , must ?  As it turns out (serendipidous, I know) we discovered the exact property a subgroup needs to ensure its cosets form a well-defined group. At least, normally they do... Get it?   Quotients and Normal Subgroups   Let . The set of (left cosets) forms a group if and only if .    Quotient Group   For any normal subgroup of a group , the quotient group , , is the set of left cosets of in with multiplication given by . quotient group     Old Friends  Let in . It is automatic that is normal since is abelian. The quotient group is our old friend .    Don't forget that the set exists for any subgroup . However, this set only satisfies the axioms of a group when the subgroup is normal.   Modular Integer? Barely Know 'Er!  Argue amongst yourselves what the 'best' notation for the integers should be:  , , , , , or whatever other horrors you can conjure.   Dihedral Quotient   is a normal subgroup of . The quotient has just two elements, and .   Quotient of Commutator Subgroup  Let be a group with commutator subgroup . Prove is abelian.   Special Linear Quotients      Define a map as the composition of where is the matrix with in the upper-left corner, 's along the rest of the diaganal, and 's everywhere else, and the second map is the canonical surjection. Then is easily seen to be a homomorphism and hence so is (since the composition of homomorhisms is a homomorphism). I claim is one-to-one and onto. For any , let and note that has determinant and thus belongs to . So . This proves is onto. If , then and so . This means .   Recalling , we have yet another useful corollary:  Order of Quotient Groups   If is finite we have .    Quotient Map   For any group and normal subgroup of the quotient map  is defined by . quotient map (groups)     Quotient Map is Surjective Homomorphism   For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using , we have .    Normal Subgroup iff Kernel   A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain .    First, suppose . Let (which is a group since is normal in ) and define such that . Let , and observe that , and so . Let , meaning that , placing . By this map is a homomorphism.  Next, suppose there exists a group and and a homomorphism such that . Let and consider . Observe given that . Thus for all , making a normal subgroup of .    Qual Watch  Proving was Part (a) of on the qualifying exam.   Cyclic Center Quotients   Let be a group with center . If is cyclic, then is abelian.    Let be a group with center , and suppose is cyclic. Let . If either or are in the center of , then , as desired. Suppose then neither nor are in the center of . Thus and are non-identity cosets in . As is cyclic, there exists some such that . Thus there exist such that and , respectively. [More coming soon!]        Given , the  is the set of left cosets of in with multiplication given by . This is a well defined group if and only if is normal. See: .     A subgroup is normal if and only if it is the kernel of a homomorphism. See: .     If is finite we have , and the is a surjective homomorphism. See: and .     If is cyclic, then is abelian. See: .      "
},
{
  "id": "thm-quotient-iff-normal",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-quotient-iff-normal",
  "type": "Theorem",
  "number": "3.29",
  "title": "Quotients and Normal Subgroups.",
  "body": "Quotients and Normal Subgroups   Let . The set of (left cosets) forms a group if and only if .   "
},
{
  "id": "def-quotient-group",
  "level": "2",
  "url": "sec-quotient-groups.html#def-quotient-group",
  "type": "Definition",
  "number": "3.30",
  "title": "Quotient Group.",
  "body": "Quotient Group   For any normal subgroup of a group , the quotient group , , is the set of left cosets of in with multiplication given by . quotient group    "
},
{
  "id": "ex-old-friends",
  "level": "2",
  "url": "sec-quotient-groups.html#ex-old-friends",
  "type": "Example",
  "number": "3.31",
  "title": "Old Friends.",
  "body": "Old Friends  Let in . It is automatic that is normal since is abelian. The quotient group is our old friend .  "
},
{
  "id": "subsec-quotients-9",
  "level": "2",
  "url": "sec-quotient-groups.html#subsec-quotients-9",
  "type": "Remark",
  "number": "3.32",
  "title": "",
  "body": " Don't forget that the set exists for any subgroup . However, this set only satisfies the axioms of a group when the subgroup is normal.  "
},
{
  "id": "exe-mod-n-iso",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-mod-n-iso",
  "type": "Discussion",
  "number": "3.2",
  "title": "Modular Integer? Barely Know ’Er!",
  "body": "Modular Integer? Barely Know 'Er!  Argue amongst yourselves what the 'best' notation for the integers should be:  , , , , , or whatever other horrors you can conjure.  "
},
{
  "id": "ex-dihedral-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#ex-dihedral-quotient",
  "type": "Example",
  "number": "3.33",
  "title": "Dihedral Quotient.",
  "body": "Dihedral Quotient   is a normal subgroup of . The quotient has just two elements, and .  "
},
{
  "id": "exe-commutator-quotient-abelian",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-commutator-quotient-abelian",
  "type": "Exercise",
  "number": "3.34",
  "title": "Quotient of Commutator Subgroup.",
  "body": "Quotient of Commutator Subgroup  Let be a group with commutator subgroup . Prove is abelian.  "
},
{
  "id": "exe-gl-sl-iso",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-gl-sl-iso",
  "type": "Exercise",
  "number": "3.35",
  "title": "Special Linear Quotients.",
  "body": "Special Linear Quotients      Define a map as the composition of where is the matrix with in the upper-left corner, 's along the rest of the diaganal, and 's everywhere else, and the second map is the canonical surjection. Then is easily seen to be a homomorphism and hence so is (since the composition of homomorhisms is a homomorphism). I claim is one-to-one and onto. For any , let and note that has determinant and thus belongs to . So . This proves is onto. If , then and so . This means .  "
},
{
  "id": "cor-order-of-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-order-of-quotient",
  "type": "Corollary",
  "number": "3.36",
  "title": "Order of Quotient Groups.",
  "body": "Order of Quotient Groups   If is finite we have .   "
},
{
  "id": "def-quotient-map",
  "level": "2",
  "url": "sec-quotient-groups.html#def-quotient-map",
  "type": "Definition",
  "number": "3.37",
  "title": "Quotient Map.",
  "body": "Quotient Map   For any group and normal subgroup of the quotient map  is defined by . quotient map (groups)    "
},
{
  "id": "prop-quotient-surj-hom",
  "level": "2",
  "url": "sec-quotient-groups.html#prop-quotient-surj-hom",
  "type": "Proposition",
  "number": "3.38",
  "title": "Quotient Map is Surjective Homomorphism.",
  "body": "Quotient Map is Surjective Homomorphism   For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using , we have .   "
},
{
  "id": "thm-norm-iff-ker",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-norm-iff-ker",
  "type": "Theorem",
  "number": "3.39",
  "title": "Normal Subgroup iff Kernel.",
  "body": "Normal Subgroup iff Kernel   A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain .    First, suppose . Let (which is a group since is normal in ) and define such that . Let , and observe that , and so . Let , meaning that , placing . By this map is a homomorphism.  Next, suppose there exists a group and and a homomorphism such that . Let and consider . Observe given that . Thus for all , making a normal subgroup of .   "
},
{
  "id": "thm-gz-cyclic",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-gz-cyclic",
  "type": "Theorem",
  "number": "3.40",
  "title": "Cyclic Center Quotients.",
  "body": "Cyclic Center Quotients   Let be a group with center . If is cyclic, then is abelian.    Let be a group with center , and suppose is cyclic. Let . If either or are in the center of , then , as desired. Suppose then neither nor are in the center of . Thus and are non-identity cosets in . As is cyclic, there exists some such that . Thus there exist such that and , respectively. [More coming soon!]   "
},
{
  "id": "sec-quotient-groups-3",
  "level": "2",
  "url": "sec-quotient-groups.html#sec-quotient-groups-3",
  "type": "Summary",
  "number": "3.3",
  "title": "",
  "body": "   Given , the  is the set of left cosets of in with multiplication given by . This is a well defined group if and only if is normal. See: .     A subgroup is normal if and only if it is the kernel of a homomorphism. See: .     If is finite we have , and the is a surjective homomorphism. See: and .     If is cyclic, then is abelian. See: .     "
},
{
  "id": "sec-products-iso-thms",
  "level": "1",
  "url": "sec-products-iso-thms.html",
  "type": "Section",
  "number": "3.4",
  "title": "Products and the Isomorphism Theorems",
  "body": "Products and the Isomorphism Theorems  The First Isomorphism Theorem    If it's your job to eat a frog, it's best to do it first thing in the morning. And If it's your job to eat two frogs, it's best to eat the biggest one first.   Mark Twain   We come to the so-called Isomorphism Theorems.  UMP for Quotient Groups  UMP for quotient groups   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then     there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,           If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: if , then and so , whence . For any we have     The formula for given above ensures that hence is surjective if and only if is surjective.    We have iff iff iff . If for some , then for some and hence for some . Since , we have .       Abelianization  Let be any group, and recall the . In we saw . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By , we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: a homomorphism from a group to an abelian group factors uniquely through the abelianization. abelianization    First Isomorphism Theorem for Groups  first isomorphism theorem (for group)   If is a homomorphism of groups, then and the map defined by induces an isomorphism     By , there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is the same as the image of .    Double Divide   If is a homomorphism from a finite group to a group , then divides and .     For any group we have .    Products    Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.   Groucho Marx   Trivially Intersecting Normal Subgroups  Let and be normal subgroups of a group such that . Prove that for all .   Group Product ( )   Let and be subgroups of a group and define the set   product (groups)     Product vs. Direct Product  The product and direct product Whatever that is are not always the same. We will explore this later in    Product Order   For two finite subgroups , .    Products and Normality   Let be a group, and . Then    ,     , and     .       When   If either one of or is a normal subgroup of , then .     The identity does not mean that every pair of elements from and must commute.   but not Abelian   In , let and . Then but and do not commute. The fact that can also be justified by observing that .    The second isomorphism theorem, also known as the diamond isomorphism theorem or the modular law, provides information about the structure of subgroups and their intersections.  Second Isomorphism Theorem for Groups  second isomorphism theorem (for groups)   Let be a group, and . Then there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition  of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the .    The third isomorphism theorem, also known as the factor or quotient theorem, gives a relationship between normal subgroups of a group and their quotient groups.  Third Isomorphism Theorem for Groups  third isomorphism theorem (for groups)   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by we get an induced homomorhism with . Moreover, we know Finally apply the to .    Lattice Isomorphism Theorem for Groups  lattice isomorphism theorem (for groups)   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:     (normal) subgroups correspond to normal subgroups i.e.,      iff and iff      iff and iff        indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)      and      and           We have previously shown that the quotient map is a surjective group homomorphism. We show:      is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups by ).     is well defined (correct codomain) since for we have (by again) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by      Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.   If and , then holds by part of or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups. See: .     In the interest of time, I'll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the since for with we have The general case is a consequence of an exercise from HW 5.     The proof of (3) is omitted.        In latex , is written using \\Psi and is written using \\Phi .       The tells us for any homomorphism .    For , we define the to be the set  .     if either or are normal. If , then and . See: .     We also have the , , and .     "
},
{
  "id": "thm-ump-quotient",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-ump-quotient",
  "type": "Theorem",
  "number": "3.41",
  "title": "UMP for Quotient Groups.",
  "body": "UMP for Quotient Groups  UMP for quotient groups   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then     there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,           If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: if , then and so , whence . For any we have     The formula for given above ensures that hence is surjective if and only if is surjective.    We have iff iff iff . If for some , then for some and hence for some . Since , we have .      "
},
{
  "id": "ex-abelianization",
  "level": "2",
  "url": "sec-products-iso-thms.html#ex-abelianization",
  "type": "Example",
  "number": "3.42",
  "title": "Abelianization.",
  "body": "Abelianization  Let be any group, and recall the . In we saw . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By , we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: a homomorphism from a group to an abelian group factors uniquely through the abelianization. abelianization   "
},
{
  "id": "thm-fit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-fit-group",
  "type": "Theorem",
  "number": "3.43",
  "title": "First Isomorphism Theorem for Groups.",
  "body": "First Isomorphism Theorem for Groups  first isomorphism theorem (for group)   If is a homomorphism of groups, then and the map defined by induces an isomorphism     By , there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is the same as the image of .   "
},
{
  "id": "cor-homom-finite-groups",
  "level": "2",
  "url": "sec-products-iso-thms.html#cor-homom-finite-groups",
  "type": "Corollary",
  "number": "3.44",
  "title": "Double Divide.",
  "body": "Double Divide   If is a homomorphism from a finite group to a group , then divides and .   "
},
{
  "id": "exe-quotients-inner-automorphisms",
  "level": "2",
  "url": "sec-products-iso-thms.html#exe-quotients-inner-automorphisms",
  "type": "Exercise",
  "number": "3.45",
  "title": "<span class=\"process-math\">\\(G\/Z(G)\\cong\\Inn(G)\\)<\/span>.",
  "body": " For any group we have .  "
},
{
  "id": "exe-trivially-intersecting-normal-subgroups",
  "level": "2",
  "url": "sec-products-iso-thms.html#exe-trivially-intersecting-normal-subgroups",
  "type": "Exercise",
  "number": "3.46",
  "title": "Trivially Intersecting Normal Subgroups.",
  "body": "Trivially Intersecting Normal Subgroups  Let and be normal subgroups of a group such that . Prove that for all .  "
},
{
  "id": "def-HK",
  "level": "2",
  "url": "sec-products-iso-thms.html#def-HK",
  "type": "Definition",
  "number": "3.47",
  "title": "Group Product (<span class=\"process-math\">\\(HK\\)<\/span>).",
  "body": "Group Product ( )   Let and be subgroups of a group and define the set   product (groups)    "
},
{
  "id": "subsec-hk-5",
  "level": "2",
  "url": "sec-products-iso-thms.html#subsec-hk-5",
  "type": "Warning",
  "number": "3.48",
  "title": "Product vs. Direct Product.",
  "body": "Product vs. Direct Product  The product and direct product Whatever that is are not always the same. We will explore this later in   "
},
{
  "id": "thm-hk-order",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-hk-order",
  "type": "Theorem",
  "number": "3.49",
  "title": "Product Order.",
  "body": "Product Order   For two finite subgroups , .   "
},
{
  "id": "thm-hn-normal",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-hn-normal",
  "type": "Theorem",
  "number": "3.50",
  "title": "Products and Normality.",
  "body": "Products and Normality   Let be a group, and . Then    ,     , and     .      "
},
{
  "id": "cor-hk-normal",
  "level": "2",
  "url": "sec-products-iso-thms.html#cor-hk-normal",
  "type": "Corollary",
  "number": "3.51",
  "title": "When <span class=\"process-math\">\\(HK=KH\\)<\/span>.",
  "body": "When   If either one of or is a normal subgroup of , then .   "
},
{
  "id": "subsec-hk-9",
  "level": "2",
  "url": "sec-products-iso-thms.html#subsec-hk-9",
  "type": "Warning",
  "number": "3.52",
  "title": "",
  "body": " The identity does not mean that every pair of elements from and must commute.  "
},
{
  "id": "ex-hk-non-commuting-elements",
  "level": "2",
  "url": "sec-products-iso-thms.html#ex-hk-non-commuting-elements",
  "type": "Example",
  "number": "3.53",
  "title": "<span class=\"process-math\">\\(HK=KH\\)<\/span> but not Abelian.",
  "body": "but not Abelian   In , let and . Then but and do not commute. The fact that can also be justified by observing that .   "
},
{
  "id": "thm-sit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-sit-group",
  "type": "Theorem",
  "number": "3.54",
  "title": "Second Isomorphism Theorem for Groups.",
  "body": "Second Isomorphism Theorem for Groups  second isomorphism theorem (for groups)   Let be a group, and . Then there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition  of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the .   "
},
{
  "id": "thm-tit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-tit-group",
  "type": "Theorem",
  "number": "3.55",
  "title": "Third Isomorphism Theorem for Groups.",
  "body": "Third Isomorphism Theorem for Groups  third isomorphism theorem (for groups)   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by we get an induced homomorhism with . Moreover, we know Finally apply the to .   "
},
{
  "id": "thm-lit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-lit-group",
  "type": "Theorem",
  "number": "3.56",
  "title": "Lattice Isomorphism Theorem for Groups.",
  "body": "Lattice Isomorphism Theorem for Groups  lattice isomorphism theorem (for groups)   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:     (normal) subgroups correspond to normal subgroups i.e.,      iff and iff      iff and iff        indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)      and      and           We have previously shown that the quotient map is a surjective group homomorphism. We show:      is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups by ).     is well defined (correct codomain) since for we have (by again) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by      Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.   If and , then holds by part of or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups. See: .     In the interest of time, I'll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the since for with we have The general case is a consequence of an exercise from HW 5.     The proof of (3) is omitted.      "
},
{
  "id": "sec-products-iso-thms-4",
  "level": "2",
  "url": "sec-products-iso-thms.html#sec-products-iso-thms-4",
  "type": "Summary",
  "number": "3.4",
  "title": "",
  "body": "   The tells us for any homomorphism .    For , we define the to be the set  .     if either or are normal. If , then and . See: .     We also have the , , and .    "
},
{
  "id": "subsec-free-groups",
  "level": "1",
  "url": "subsec-free-groups.html",
  "type": "Section",
  "number": "4.1",
  "title": "Free Groups",
  "body": "Free Groups  Free Group   Let be a set. Consider a new set of symbols . The free group on , denoted , is the set of all finite words written using symbols in , including the empty word, where two words are equal if one is obtained from the other by erasing a pair of consecutive symbols or . In symbols, The set is a group in which any two words are multiplied by concatenation.     The free group on a singleton set is the infinite cyclic group . It is easy to visualize this since .   It is already somewhat challenging to visualize the free group on two generators, . The best one can do to represent it is an infinite graph called the Cayley graph of this group. It is obtained by starting at the origin (the center of the picture below), then branching out in four directions by a length of 1, then branching out similarly by a length of 1\/2, then by 1\/4, then by 1\/8, etc (I stopped there, to avoid cluttering the picture too much but to get the complete Cayley graph one continues infinitely obtaining a fractal kind of picture). Then every element of corresponds in a rather natural way to exactly one dot in this diagram. Indeed, we can place the empty word at the center, and we can agree that every in a word takes us one step to the right, every to the left, every up, and every down. For example, the word takes us here:  Universal Mapping Property for Free Groups   Let be a set, let be the free group on , let be a group, and let be a function. Then there is a unique homomorphism satisfying for all .    Set to be given by for any . One checks that is well defined by noting that for any and similarly for inserting . The fact that is a group homomorphism and its uniqueness are left as an exercise.    "
},
{
  "id": "def-free-group",
  "level": "2",
  "url": "subsec-free-groups.html#def-free-group",
  "type": "Definition",
  "number": "4.2",
  "title": "Free Group.",
  "body": "Free Group   Let be a set. Consider a new set of symbols . The free group on , denoted , is the set of all finite words written using symbols in , including the empty word, where two words are equal if one is obtained from the other by erasing a pair of consecutive symbols or . In symbols, The set is a group in which any two words are multiplied by concatenation.   "
},
{
  "id": "subsec-free-groups-3",
  "level": "2",
  "url": "subsec-free-groups.html#subsec-free-groups-3",
  "type": "Example",
  "number": "4.3",
  "title": "",
  "body": " The free group on a singleton set is the infinite cyclic group . It is easy to visualize this since .  "
},
{
  "id": "thm-ump-free",
  "level": "2",
  "url": "subsec-free-groups.html#thm-ump-free",
  "type": "Theorem",
  "number": "4.4",
  "title": "Universal Mapping Property for Free Groups.",
  "body": "Universal Mapping Property for Free Groups   Let be a set, let be the free group on , let be a group, and let be a function. Then there is a unique homomorphism satisfying for all .    Set to be given by for any . One checks that is well defined by noting that for any and similarly for inserting . The fact that is a group homomorphism and its uniqueness are left as an exercise.   "
},
{
  "id": "sec-presentations",
  "level": "1",
  "url": "sec-presentations.html",
  "type": "Section",
  "number": "4.2",
  "title": "Presentations",
  "body": "Presentations  What is a Presentation?    Megamind: Oh, you're a villain, alright, just not a super one.  Tighten: Yeah? What's the difference?    Megamind: Presentation!   Megamind (2010)   A group presentation provides a concise way to describe a group in terms of generators and relations.  Generated Normal Subgroup   Let be a group and let be a set. The normal subgroup of generated by , denoted , is the set of all products of conjugates of elements of and inverses of elements of . In symbols,     Presentation   Let be a set and let be a subset of the free group . The group with presentation  is defined to be the quotient group .     For , we obtain the cyclic group of order :     For , we obtain the usual presentation for :    UMP of a Presentation   Let be a set, let be the free group on , let be a subset of , let be a group, and let be a function satisfying the property that whenever , with each and , then . Then there is a unique homomorphism satisfying for all .    By the UMP of the free group there is a unique group homomorphism such that for all . Then for , we have , showing that . Since and is the smallest normal subgroup containing , it follows that . By the UMP of the quotient, induces a group homomorphism . Moreover, for each we have .     The UMP of the presentation says that one can build a homomorphism from a group with a given presentation to any other group as long as one is able to send the generators (elements of ) via some function to some elements of that satisfy the same relations in as those given in the presentation.    To find a groups homomorphism it suffices to find a map , say and to verify that . As you have shown on homework, this does hold for the matrices By the UMP of the presentation there is a group homomorphism that extends ; that is for all .   We can use the map above to understand the notions of isometry and orientation-preserving a little more rigorously. Indeed, an invertible linear transformation, equivalently an element is an isometry if and only if . An invertible linear transformation, equivalently an element is orientation-preserving if and only if . Thus the group of orientation-preserving isometries of can be identified with .   Every Group is a Quotient of a Free Group     "
},
{
  "id": "def-gen-normal-subgroup",
  "level": "2",
  "url": "sec-presentations.html#def-gen-normal-subgroup",
  "type": "Definition",
  "number": "4.5",
  "title": "Generated Normal Subgroup.",
  "body": "Generated Normal Subgroup   Let be a group and let be a set. The normal subgroup of generated by , denoted , is the set of all products of conjugates of elements of and inverses of elements of . In symbols,    "
},
{
  "id": "def-presentation",
  "level": "2",
  "url": "sec-presentations.html#def-presentation",
  "type": "Definition",
  "number": "4.6",
  "title": "Presentation.",
  "body": "Presentation   Let be a set and let be a subset of the free group . The group with presentation  is defined to be the quotient group .   "
},
{
  "id": "subsec-presentations-6",
  "level": "2",
  "url": "sec-presentations.html#subsec-presentations-6",
  "type": "Example",
  "number": "4.7",
  "title": "",
  "body": " For , we obtain the cyclic group of order :   "
},
{
  "id": "subsec-presentations-7",
  "level": "2",
  "url": "sec-presentations.html#subsec-presentations-7",
  "type": "Example",
  "number": "4.8",
  "title": "",
  "body": " For , we obtain the usual presentation for :   "
},
{
  "id": "thm-ump-presentation",
  "level": "2",
  "url": "sec-presentations.html#thm-ump-presentation",
  "type": "Theorem",
  "number": "4.9",
  "title": "UMP of a Presentation.",
  "body": "UMP of a Presentation   Let be a set, let be the free group on , let be a subset of , let be a group, and let be a function satisfying the property that whenever , with each and , then . Then there is a unique homomorphism satisfying for all .    By the UMP of the free group there is a unique group homomorphism such that for all . Then for , we have , showing that . Since and is the smallest normal subgroup containing , it follows that . By the UMP of the quotient, induces a group homomorphism . Moreover, for each we have .   "
},
{
  "id": "subsec-presentations-9",
  "level": "2",
  "url": "sec-presentations.html#subsec-presentations-9",
  "type": "Remark",
  "number": "4.10",
  "title": "",
  "body": " The UMP of the presentation says that one can build a homomorphism from a group with a given presentation to any other group as long as one is able to send the generators (elements of ) via some function to some elements of that satisfy the same relations in as those given in the presentation.  "
},
{
  "id": "subsec-presentations-10",
  "level": "2",
  "url": "sec-presentations.html#subsec-presentations-10",
  "type": "Example",
  "number": "4.11",
  "title": "",
  "body": " To find a groups homomorphism it suffices to find a map , say and to verify that . As you have shown on homework, this does hold for the matrices By the UMP of the presentation there is a group homomorphism that extends ; that is for all .  "
},
{
  "id": "graction",
  "level": "1",
  "url": "graction.html",
  "type": "Section",
  "number": "5.1",
  "title": "Group Actions",
  "body": "Group Actions     Actions speak louder than words.   Anthony of Padua    Time to Act  We come to one of the central concepts in group theory, that of an action of a group on a set.  Group Action   For a group and set , an action of on is a function typically written as , such that    for all and .     for all .    group action  -action  action (of a group)      To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .   Group Actions     Trivial Action  For any group and any set , defines an action, the trivial action . trivial action     The group acts on the set such that .   Left Multiplication  For any group and any set , defines an action, the left multiplication action . And similarly for right multiplication, yet we do not speak of that here.  left multiplication action    Conjugation  For any group and any set , defines an action, the conjugation action . conjugation action        Let be a group and a set.   Let and . Notice and . Thus the trivial action is indeed a group action.            This is a small assemblage with no title, simply to make sure the surrounding box behaves properly, especially for latex output.    Though the set need not be a group, it certainly can be. Indeed, a group can act on itself, as we will see in .    The Permutation Representation  One can also think of group actions as homomorphisms.  Permutation Representation  permutation representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .    An immediate perk of this result is that we already know a lot of things about homomorphisms, and we can thus extend that knowledge into the realm of group actions at our leisure.  Let's see some examples.  Common Permutation Representations     For the trivial action, the associated group homomorphism is by     For left multiplication, the associated group homomorphism is by , where     For the conjugation action, the associated group homomorphism is by , where        Faithful and Transitive Actions  Faithful   An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that . faithful action     The Faithful Action  Verify that the two definitions of a faithful action are indeed equivalent. That is, show that the permutation representation of a group action is injective if and only if for a given , whenever for all , it must be that .   Losing Faith  Should an action which is not faithful be called unfaithful ? Adulterous ? Discuss.   Trivial Adultery  The trivial action is not faithful.   Transitive   An action is transitive if for all there is a such that . transitive action      In many cases, transitivity and faithfulness are related concepts. As we will see later, if a group action is transitive on a set , then the action is faithful if and only if the stabilizer of any element of is trivial. In these situations we can identify the group with a subgroup of the symmetric group on , and use this identification to study the group.       One of the central topics of group theory is the . The two main group actions we will examine are that of and .    Through the group actions can be viewed as homomorphisms. This will be used extensively.    Group actions can be both and .     "
},
{
  "id": "def-graction",
  "level": "2",
  "url": "graction.html#def-graction",
  "type": "Definition",
  "number": "5.1",
  "title": "Group Action.",
  "body": "Group Action   For a group and set , an action of on is a function typically written as , such that    for all and .     for all .    group action  -action  action (of a group)    "
},
{
  "id": "ex-group-actions",
  "level": "2",
  "url": "graction.html#ex-group-actions",
  "type": "Example",
  "number": "5.2",
  "title": "Group Actions.",
  "body": "Group Actions     Trivial Action  For any group and any set , defines an action, the trivial action . trivial action     The group acts on the set such that .   Left Multiplication  For any group and any set , defines an action, the left multiplication action . And similarly for right multiplication, yet we do not speak of that here.  left multiplication action    Conjugation  For any group and any set , defines an action, the conjugation action . conjugation action        Let be a group and a set.   Let and . Notice and . Thus the trivial action is indeed a group action.          "
},
{
  "id": "subsec-actions-7",
  "level": "2",
  "url": "graction.html#subsec-actions-7",
  "type": "Remark",
  "number": "5.3",
  "title": "",
  "body": " Though the set need not be a group, it certainly can be. Indeed, a group can act on itself, as we will see in .  "
},
{
  "id": "thm-permrep",
  "level": "2",
  "url": "graction.html#thm-permrep",
  "type": "Theorem",
  "number": "5.4",
  "title": "Permutation Representation.",
  "body": "Permutation Representation  permutation representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .   "
},
{
  "id": "ex-permrep-examples",
  "level": "2",
  "url": "graction.html#ex-permrep-examples",
  "type": "Example",
  "number": "5.5",
  "title": "Common Permutation Representations.",
  "body": "Common Permutation Representations     For the trivial action, the associated group homomorphism is by     For left multiplication, the associated group homomorphism is by , where     For the conjugation action, the associated group homomorphism is by , where      "
},
{
  "id": "def-faithful-action",
  "level": "2",
  "url": "graction.html#def-faithful-action",
  "type": "Definition",
  "number": "5.6",
  "title": "Faithful.",
  "body": "Faithful   An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that . faithful action    "
},
{
  "id": "exe-faithful-action",
  "level": "2",
  "url": "graction.html#exe-faithful-action",
  "type": "Exercise",
  "number": "5.7",
  "title": "The Faithful Action.",
  "body": "The Faithful Action  Verify that the two definitions of a faithful action are indeed equivalent. That is, show that the permutation representation of a group action is injective if and only if for a given , whenever for all , it must be that .  "
},
{
  "id": "subsec-faithful-transitive-4",
  "level": "2",
  "url": "graction.html#subsec-faithful-transitive-4",
  "type": "Discussion",
  "number": "5.1",
  "title": "Losing Faith.",
  "body": "Losing Faith  Should an action which is not faithful be called unfaithful ? Adulterous ? Discuss.  "
},
{
  "id": "def-trivial-action-not-faithful",
  "level": "2",
  "url": "graction.html#def-trivial-action-not-faithful",
  "type": "Example",
  "number": "5.8",
  "title": "Trivial Adultery.",
  "body": "Trivial Adultery  The trivial action is not faithful.  "
},
{
  "id": "def-transitive-action",
  "level": "2",
  "url": "graction.html#def-transitive-action",
  "type": "Definition",
  "number": "5.9",
  "title": "Transitive.",
  "body": "Transitive   An action is transitive if for all there is a such that . transitive action    "
},
{
  "id": "subsec-faithful-transitive-7",
  "level": "2",
  "url": "graction.html#subsec-faithful-transitive-7",
  "type": "Remark",
  "number": "5.10",
  "title": "",
  "body": " In many cases, transitivity and faithfulness are related concepts. As we will see later, if a group action is transitive on a set , then the action is faithful if and only if the stabilizer of any element of is trivial. In these situations we can identify the group with a subgroup of the symmetric group on , and use this identification to study the group.  "
},
{
  "id": "graction-6",
  "level": "2",
  "url": "graction.html#graction-6",
  "type": "Summary",
  "number": "5.1",
  "title": "",
  "body": "   One of the central topics of group theory is the . The two main group actions we will examine are that of and .    Through the group actions can be viewed as homomorphisms. This will be used extensively.    Group actions can be both and .    "
},
{
  "id": "sec-left-mult-conjugation",
  "level": "1",
  "url": "sec-left-mult-conjugation.html",
  "type": "Section",
  "number": "5.2",
  "title": "Self Actions and Conjugacy",
  "body": "Self Actions and Conjugacy  Self Actions    Selfless action is a source of strength.   Mahatma Ghandi   Groups Acting on Themselves     Left Regular Action  Let be any group and define an action of on itself by the rule This is also known as the left regular action  left regular action    Self Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting This is also known as self-conjugation  self-conjugation         Though called the left regular action, we usually say Let act on itself my left multiplication , as that is more easily understood.   Kernel of the Conjugation Action   The kernel of the permutation representation for the conjugation action is the center .    If is the permutation representation for acting on by , then      Faithful Self Actions      The left regular action is faithful.    The self conjugation action is faithful if and only if .       A group may also act on its cosets.  Actions on Cosets   For a subgroup , consider the set of left cosets . Then acts on my left multiplication.    Largest Normal Subgroup   Let be a subgroup of a group , and let act on the set of left cosets by left multiplication . Let denote the permutation representation associated to this action. Then  the action described above is transitive     the subgroup described in (2) is the largest (with respect to containment) normal subgroup of contained in .      Qual Watch  Proving is extremely similar to Part (a) of on the qualifying exam.   Smallest Prime Index is Normal   Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Then is normal in .    Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The tells us that . Thus by . Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .    Qual Watch  Proving was on the qualifying exam and on the qualifying exam.    Conjugacy    Words may inspire but only action creates change.   Simon Sinek   Conjugate   Let be a group. Two elements are conjugate if there is with . Two subsets are conjugate if there is with . conjugate     Conjugacy Class   The conjugacy class of an element is . conjugacy class      Conjugacy Class Partition   The conjugacy classes of a group partition the group.    We will not prove this result here, as it is really a specific case of , which we examine in the next section.    The conjugacy classes for are    ,    all two cycles of which there are ,    all three cycles of which there are ,    all four cycles of which there are , and    all product of two disjoint two cycles of which there are .       Here is a convenient way of checking the conjugacy of two permutations.  Conjugate Permutations   Two elements of are conjugate if and only if they have the same cycle type.    If two elements of are conjugate, say , then they have the same cycle type, since we may write as a product of disjoint cycles and then apply . Indeed, and the shows that the right-side is a product of disjoint cycles.    Normal Subgroups are Unions of Conjugacy Classes   Let . Then is the disjoint union of some of the conjugacy classes in .    Define the conjugation action of on by for all and . Since this is well defined. The two properties in the definition of the action hold for the action of by on since they hold more generally for the action of by conjugation on . Therefore this is indeed an action. The orbits of elements under this action are . Thus the conjugacy classes of the elements of partition .        Groups may act on themselves by left multiplication and conjugation. See: .     The is faithful, whereas the is faithful if and only if the center of the group is trivial. This is because the is the center of the group.    For , may also act on the set . See: . This action is transitive, and the kernel of the action is the largest normal subgroup of contained in . See:     A subgroup with an index , where is the smallest prime divisor of the order of , is normal in . See:     A of an element is the set of all elements to . Normal subgroups are disjoint unions of conjugacy classes of . See: .      "
},
{
  "id": "ex-self-actions",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#ex-self-actions",
  "type": "Example",
  "number": "5.11",
  "title": "Groups Acting on Themselves.",
  "body": "Groups Acting on Themselves     Left Regular Action  Let be any group and define an action of on itself by the rule This is also known as the left regular action  left regular action    Self Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting This is also known as self-conjugation  self-conjugation       "
},
{
  "id": "lem-conj-ker",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#lem-conj-ker",
  "type": "Lemma",
  "number": "5.12",
  "title": "Kernel of the Conjugation Action.",
  "body": "Kernel of the Conjugation Action   The kernel of the permutation representation for the conjugation action is the center .    If is the permutation representation for acting on by , then     "
},
{
  "id": "thm-faithful-self-actions",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-faithful-self-actions",
  "type": "Theorem",
  "number": "5.13",
  "title": "Faithful Self Actions.",
  "body": "Faithful Self Actions      The left regular action is faithful.    The self conjugation action is faithful if and only if .      "
},
{
  "id": "ex-coset-mult",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#ex-coset-mult",
  "type": "Example",
  "number": "5.14",
  "title": "Actions on Cosets.",
  "body": "Actions on Cosets   For a subgroup , consider the set of left cosets . Then acts on my left multiplication.   "
},
{
  "id": "lem-largest-normal-subgroup",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#lem-largest-normal-subgroup",
  "type": "Lemma",
  "number": "5.15",
  "title": "Largest Normal Subgroup.",
  "body": "Largest Normal Subgroup   Let be a subgroup of a group , and let act on the set of left cosets by left multiplication . Let denote the permutation representation associated to this action. Then  the action described above is transitive     the subgroup described in (2) is the largest (with respect to containment) normal subgroup of contained in .     "
},
{
  "id": "thm-smallest-prime-normal",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-smallest-prime-normal",
  "type": "Theorem",
  "number": "5.16",
  "title": "Smallest Prime Index is Normal.",
  "body": "Smallest Prime Index is Normal   Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Then is normal in .    Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The tells us that . Thus by . Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .   "
},
{
  "id": "def-conjugate",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#def-conjugate",
  "type": "Definition",
  "number": "5.17",
  "title": "Conjugate.",
  "body": "Conjugate   Let be a group. Two elements are conjugate if there is with . Two subsets are conjugate if there is with . conjugate    "
},
{
  "id": "def-conjugacy-class",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#def-conjugacy-class",
  "type": "Definition",
  "number": "5.18",
  "title": "Conjugacy Class.",
  "body": "Conjugacy Class   The conjugacy class of an element is . conjugacy class     "
},
{
  "id": "prop-conj-part",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#prop-conj-part",
  "type": "Proposition",
  "number": "5.19",
  "title": "Conjugacy Class Partition.",
  "body": "Conjugacy Class Partition   The conjugacy classes of a group partition the group.   "
},
{
  "id": "subsec-conjugacy-7",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#subsec-conjugacy-7",
  "type": "Example",
  "number": "5.20",
  "title": "",
  "body": "  The conjugacy classes for are    ,    all two cycles of which there are ,    all three cycles of which there are ,    all four cycles of which there are , and    all product of two disjoint two cycles of which there are .      "
},
{
  "id": "prop-perm-conj",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#prop-perm-conj",
  "type": "Proposition",
  "number": "5.21",
  "title": "Conjugate Permutations.",
  "body": "Conjugate Permutations   Two elements of are conjugate if and only if they have the same cycle type.    If two elements of are conjugate, say , then they have the same cycle type, since we may write as a product of disjoint cycles and then apply . Indeed, and the shows that the right-side is a product of disjoint cycles.   "
},
{
  "id": "thm-normal-union-of-conjugacy-classes",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-normal-union-of-conjugacy-classes",
  "type": "Theorem",
  "number": "5.22",
  "title": "Normal Subgroups are Unions of Conjugacy Classes.",
  "body": "Normal Subgroups are Unions of Conjugacy Classes   Let . Then is the disjoint union of some of the conjugacy classes in .    Define the conjugation action of on by for all and . Since this is well defined. The two properties in the definition of the action hold for the action of by on since they hold more generally for the action of by conjugation on . Therefore this is indeed an action. The orbits of elements under this action are . Thus the conjugacy classes of the elements of partition .   "
},
{
  "id": "sec-left-mult-conjugation-4",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#sec-left-mult-conjugation-4",
  "type": "Summary",
  "number": "5.2",
  "title": "",
  "body": "   Groups may act on themselves by left multiplication and conjugation. See: .     The is faithful, whereas the is faithful if and only if the center of the group is trivial. This is because the is the center of the group.    For , may also act on the set . See: . This action is transitive, and the kernel of the action is the largest normal subgroup of contained in . See:     A subgroup with an index , where is the smallest prime divisor of the order of , is normal in . See:     A of an element is the set of all elements to . Normal subgroups are disjoint unions of conjugacy classes of . See: .     "
},
{
  "id": "sec-orbit-stab-class-eq",
  "level": "1",
  "url": "sec-orbit-stab-class-eq.html",
  "type": "Section",
  "number": "5.3",
  "title": "Orbits and Stabilizers",
  "body": "Orbits and Stabilizers  In a Stable Orbit    Being born in a stable does not make one a horse.   Arthur Wellesley   The information encoded in a group action has two basic parts: one part tells us where points go and the other part tells us how points stay put. The following terminology refers to these ideas.  Orbit   Let be a group acting on a set . For an element the orbit of is  orbit      A fun fact about orbits is that they've secretly been at the heart of everything we've been doing so far.  Familiar Orbits   Let be a group.   Let act upon itself by . Under this action, .    Let act upon itself by . Under this action, .       All the way back in we proved that the set of cosets induced an equivalence relation on the group. As we saw in , left cosets turn out to be a special kind of orbit. Luckily for us, the equivalence relation generalizes.    Let be a group acting on a set . The equivalence relation on induced by the action of , written , is defined by if and only if there is a such that . The equivalence classes of are the orbits. equivalence relation induced by a group action     Orbits Partition the Group   Let be a group acting on a set . Then    is an equivalence relation;    for any , either or ; and     .       We'll have a lot more to say about orbits, but first they'll need a friend.  Stabilizer   Let be a group acting on a set . For an element the stabilizer is  stabilizer       Sometimes (including on old qualifying exams) the notation is used to denote the stabilizer. Given that this notation gives no context as to what the set is or what it does, we will stick to .   Stabilizers are Subgroups  The stabilizer is a subgroup of .   One of the most important facts about the action of a group on a finite set is the following:  The Length of the Orbit is the Index of the Stabilizer (LOIS)  LOIS   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities     Length isn't a word we have used to describe size or cardinality before, but I suppose that SOIS and COIS just don't quite roll of the tongue quite the same.  Orbit-Stabilizer Theorem  orbit-stabilizer theorem   Let be a finite group that acts on a finite set via . For any we have      Take note that only applies when is a finite group.   Transitive iff One Orbit   An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial.    Lets look at some group actions of a more geometric flavor. What do you think geometry tastes like? Which field of mathematics would taste the best?   Symmetries of the Cube  Let be the group of rotational symmetries of the cube and let act on the collection of faces of the cube in the evident way. This action is transitive and so the one and only orbit has length . It follows that for any face of the cube, has index and, since we already know that , it follows from that . That is, there are four symmetries that map to itself. Indeed, they are the rotations by , , or degrees about the line of symmetry passing through the mid-point of and the mid-point of the opposite face.   That was fun and all, but I just feel like there weren't enough faces...  Symmetries of the Dodecahedron  Let be the group of rotatoinal symmetries of the dodecahedron ( pentagonal faces). The evident action of on the twleve faces is transitive. For each face , clearly has elements: the five rotations about the line joining the midpoint of to the midpoint of the face on the opposite side. Since and , we conclude .   As a final note, we are now able to connect the concepts of transitive and faithful actions in a more meaningful way.  Transitive and Faithful   Suppose that is an abelian group acting transitively and faithfully on a set . Then .    Let . As the action is transitive, by the exercise above we have that the kernel of the action is the intersection of over all . However, as is abelian, for all . Hence, the kernel of the action is for any . On the other hand, the action is faithful, which means the kernel of the action is the identity. It follows that for every . Finally, as the action is transitive, for some (any) . By , .     The Class Equation    Let the others have the charisma. I've got the class.   George H. W. Bush   Centralizer   Let be a group. For any , is called the centralizer of in  centralizer       Many texts use the notation for the centralzier and for conjugacy classes. However, given that the center of a group is denoted with , we argue that makes more intuitive sense for the centralizer, freeing up for conjugacy classes.   Center is Intersection of Centrilizers  Prove that    Normalizer   Let be a group. For any , is called the normalizer of in . normalizer       Notice that when consists of just one element, , we have .   Notation Check  There have been a lot of new sets introduced recently, all of whom seem to be flying around with reckless abandon. Here's a quick refresher:  Let be a group acting on a set , and let .    : The of in .     The of in .     The of in .     The of in .     The of in .      Conjugation Actions and LOIS   Let be a group.     Then acts on by . For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by . For all , and .       Size of Conjugacy Class Divides   For a finite group , the size of any conjugacy class divides .    Class Equation  class equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than . Then     The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by , we have . The follows from substituting this into the equation above.    The provides a way of decomposing a group into its conjugacy classes, which are fundamental building blocks of the group and are essential in more advanced topics, such as representation and character theory.  It also gives us information about the size and structure of the center of a group. (Read: when a proof involves the center of a group from here on out, the is probably a good place to start)      In a group action, the of an element is the set of points that the element is mapped to under the action, and the is set of all points that fix .    Orbits induce an equivalence relation and partition on . See: and They correspond to cosets under the and conjugacy classes under the . See: .      , (LOIS), tells us and the yields .    An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial. See: .     The of an element is the set of all elements that commute with it. The of a set is the set of elements that fix the set under conjugation.    When acts on itself by conjugation, we have and . See:     The yields , where are the list of unique representatives of all of the conjugacy classes of of size greater than .     "
},
{
  "id": "def-orbit",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-orbit",
  "type": "Definition",
  "number": "5.23",
  "title": "Orbit.",
  "body": "Orbit   Let be a group acting on a set . For an element the orbit of is  orbit     "
},
{
  "id": "ex-familiar-orbits",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-familiar-orbits",
  "type": "Example",
  "number": "5.24",
  "title": "Familiar Orbits.",
  "body": "Familiar Orbits   Let be a group.   Let act upon itself by . Under this action, .    Let act upon itself by . Under this action, .      "
},
{
  "id": "def-orbit-equiv",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-orbit-equiv",
  "type": "Definition",
  "number": "5.25",
  "title": "",
  "body": "  Let be a group acting on a set . The equivalence relation on induced by the action of , written , is defined by if and only if there is a such that . The equivalence classes of are the orbits. equivalence relation induced by a group action    "
},
{
  "id": "thm-orbits-partition",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-orbits-partition",
  "type": "Theorem",
  "number": "5.26",
  "title": "Orbits Partition the Group.",
  "body": "Orbits Partition the Group   Let be a group acting on a set . Then    is an equivalence relation;    for any , either or ; and     .      "
},
{
  "id": "def-stab",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-stab",
  "type": "Definition",
  "number": "5.27",
  "title": "Stabilizer.",
  "body": "Stabilizer   Let be a group acting on a set . For an element the stabilizer is  stabilizer     "
},
{
  "id": "exe-stabilizer-is-subgroup",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#exe-stabilizer-is-subgroup",
  "type": "Exercise",
  "number": "5.28",
  "title": "Stabilizers are Subgroups.",
  "body": "Stabilizers are Subgroups  The stabilizer is a subgroup of .  "
},
{
  "id": "thm-LOIS",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-LOIS",
  "type": "Theorem",
  "number": "5.29",
  "title": "The Length of the Orbit is the Index of the Stabilizer (LOIS).",
  "body": "The Length of the Orbit is the Index of the Stabilizer (LOIS)  LOIS   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities    "
},
{
  "id": "thm-orbit-stabilizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-orbit-stabilizer",
  "type": "Theorem",
  "number": "5.30",
  "title": "Orbit-Stabilizer Theorem.",
  "body": "Orbit-Stabilizer Theorem  orbit-stabilizer theorem   Let be a finite group that acts on a finite set via . For any we have    "
},
{
  "id": "subsec-lois-orbit-stabilizer-18",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#subsec-lois-orbit-stabilizer-18",
  "type": "Warning",
  "number": "5.31",
  "title": "",
  "body": " Take note that only applies when is a finite group.  "
},
{
  "id": "cor-transitive-orbit",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#cor-transitive-orbit",
  "type": "Corollary",
  "number": "5.32",
  "title": "Transitive iff One Orbit.",
  "body": "Transitive iff One Orbit   An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial.   "
},
{
  "id": "ex-cube",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-cube",
  "type": "Example",
  "number": "5.33",
  "title": "Symmetries of the Cube.",
  "body": "Symmetries of the Cube  Let be the group of rotational symmetries of the cube and let act on the collection of faces of the cube in the evident way. This action is transitive and so the one and only orbit has length . It follows that for any face of the cube, has index and, since we already know that , it follows from that . That is, there are four symmetries that map to itself. Indeed, they are the rotations by , , or degrees about the line of symmetry passing through the mid-point of and the mid-point of the opposite face.  "
},
{
  "id": "ex-dodec",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-dodec",
  "type": "Example",
  "number": "5.34",
  "title": "Symmetries of the Dodecahedron.",
  "body": "Symmetries of the Dodecahedron  Let be the group of rotatoinal symmetries of the dodecahedron ( pentagonal faces). The evident action of on the twleve faces is transitive. For each face , clearly has elements: the five rotations about the line joining the midpoint of to the midpoint of the face on the opposite side. Since and , we conclude .  "
},
{
  "id": "thm-transfaith",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-transfaith",
  "type": "Theorem",
  "number": "5.35",
  "title": "Transitive and Faithful.",
  "body": "Transitive and Faithful   Suppose that is an abelian group acting transitively and faithfully on a set . Then .    Let . As the action is transitive, by the exercise above we have that the kernel of the action is the intersection of over all . However, as is abelian, for all . Hence, the kernel of the action is for any . On the other hand, the action is faithful, which means the kernel of the action is the identity. It follows that for every . Finally, as the action is transitive, for some (any) . By , .   "
},
{
  "id": "def-centralizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-centralizer",
  "type": "Definition",
  "number": "5.36",
  "title": "Centralizer.",
  "body": "Centralizer   Let be a group. For any , is called the centralizer of in  centralizer     "
},
{
  "id": "exe-centrilizer-intersection-is-center",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#exe-centrilizer-intersection-is-center",
  "type": "Exercise",
  "number": "5.37",
  "title": "Center is Intersection of Centrilizers.",
  "body": "Center is Intersection of Centrilizers  Prove that   "
},
{
  "id": "def-normalizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-normalizer",
  "type": "Definition",
  "number": "5.38",
  "title": "Normalizer.",
  "body": "Normalizer   Let be a group. For any , is called the normalizer of in . normalizer     "
},
{
  "id": "subsec-class-eq-7",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#subsec-class-eq-7",
  "type": "Remark",
  "number": "5.39",
  "title": "",
  "body": " Notice that when consists of just one element, , we have .  "
},
{
  "id": "lem-conjugation-and-lois",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#lem-conjugation-and-lois",
  "type": "Lemma",
  "number": "5.40",
  "title": "Conjugation Actions and LOIS.",
  "body": "Conjugation Actions and LOIS   Let be a group.     Then acts on by . For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by . For all , and .      "
},
{
  "id": "thm-conjugacy-divides-order",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-conjugacy-divides-order",
  "type": "Theorem",
  "number": "5.41",
  "title": "Size of Conjugacy Class Divides <span class=\"process-math\">\\(|G|\\)<\/span>.",
  "body": "Size of Conjugacy Class Divides   For a finite group , the size of any conjugacy class divides .   "
},
{
  "id": "thm-class-eq",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-class-eq",
  "type": "Theorem",
  "number": "5.42",
  "title": "Class Equation.",
  "body": "Class Equation  class equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than . Then     The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by , we have . The follows from substituting this into the equation above.   "
},
{
  "id": "sec-orbit-stab-class-eq-4",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#sec-orbit-stab-class-eq-4",
  "type": "Summary",
  "number": "5.3",
  "title": "",
  "body": "   In a group action, the of an element is the set of points that the element is mapped to under the action, and the is set of all points that fix .    Orbits induce an equivalence relation and partition on . See: and They correspond to cosets under the and conjugacy classes under the . See: .      , (LOIS), tells us and the yields .    An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial. See: .     The of an element is the set of all elements that commute with it. The of a set is the set of elements that fix the set under conjugation.    When acts on itself by conjugation, we have and . See:     The yields , where are the list of unique representatives of all of the conjugacy classes of of size greater than .    "
},
{
  "id": "sec-sylow",
  "level": "1",
  "url": "sec-sylow.html",
  "type": "Section",
  "number": "6.1",
  "title": "Sylow’s Theorems",
  "body": "Sylow's Theorems     What makes me unique is that I'm normal.   Scotty McCreery   We come to a very powerful technique for analyzing finite groups of relatively small order. One aspect of Sylow theory is that it allows us to deduce, in certain special cases, the existence of a unique subgroup of a given order, and thus it allows one to construct a normal subgroup.   Groups of Prime Order  -group   For a prime number , a -group is a group of order for some . -group     Center of -group is Nontrivial   If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than as in . Then for each , so . Since , it follows that for each . From we deduce that so, .    Qual Watch  Proving was Part (a) of on the qualifying exam.   Order and   Let be prime.   Any group of order is cyclic.    Any group of order is abelian.       Qual Watch  Proving Part (b) of was on the qualifying exam.   Cauchy's Theorem  Cauchy's theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)     allows us to conclude the existence of certain elements in a group based solely on its order, which can be a powerful tool in studying the structure of groups.  For example, it can be used to prove the existence of subgroups of a given order in a group, and it is a key ingredient in the proof of , which provides information about the structure of finite groups.   has since been generalized and extended in many ways, and it is now a fundamental result in the theory of finite groups, where it plays a central role in the classification of groups of small order.   Sylow Subgroups  Sylow -subgroup   Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to .  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups. Sylow -subgroup        We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .   Sylow Subgroups in  In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .   Sylow Subgroups in  In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are five cycles, but there are four of these in every Sylow -subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are three cycles, but there are two of these in every Sylow -subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.    Sylows-Theorem    If is a finite group and is a prime with , then acts on the set of its Sylow -subgroups via conjugation.     As of now, for all we know, this might be the action on the empty set, but we'll see in a bit that the set of Sylow -subgroups is in fact not empty.   Sylow Theory is all about understanding this action very well.  Sylow's Lemma   Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .    Since , we have . For the reverse containment, let . Since , is a subgroup of . (Technically, we only proved is a subgroup if , but the proof applies verbatim provided the weaker condition holds.) Also and since each of , , and is a power of , is a -subgroup of . But and is a -subgroup of largest possible order. So . This proves and thus .    Sylow's Theorems  Sylow's theorems   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence           Recall that we write where . We need to prove contains a subgroup of order , and we proceed by induction on .  If or, more generally, if , then is a Sylow -subgroup. We may thus assume . We proceed by considering two cases, depending on whether or not divides .  If , then by , there is an element of order . Set . Since , we have . Since , by induction has a subgroup of order (i.e. of index ). By , this subgroup corresponds to a subgroup of of index , hence of order .  For the second case, assume and consider the for : where are a complete and non-redundant list of non-central conjugacy class representatives. Since and , we must have for at least one . For this , we have where . Since is not central, and hence, by induction, contains a subgroup of order . But this subgroup is also a subgroup of .    Let be a Sylow -subgroup and let be any -subgroup. Let denote the collection of all conjugates of : Part (3) tells us the consists of all Sylow -subgroups of , but we don't yet know this. Nonetheless, acts (transitively) on by conjugation, and thus also acts on (not necessarily transitively). The key to proving parts (2) and (3) of the Sylow Theorem is to analyse the action of on to establish and below.  Let be the orbits of the action of on , and for each pick a representative . We have , where the last equation uses the Lemma. By LOIS, we thus have and hence   This equation holds for any -subgroup of . In particular, we can take . In this case the first term is and, since for all , the remaining terms are divisible by . This gives (This does not yet prove part (3) since we don't yet know that consists of all Sylow -subgroups.)  We can now prove part (2): By way of contradiction, suppose is a -subgroup of such that is not contained in any of the subgroups belonging to . Then for all and thus every term on the right-hand side of is divisble by , contrary to . The second assertion in (2) follows by taking to be a Sylow -subgroup.  This proves, in particular, that in fact does consist of all Sylow -subgroups.    Part (3) thus follows from .    For any , the stabilizer of for the action of on by conjugation is . Since we now know the action is transitive, Moreover, since and , it follows that .        provides a systematic way of analyzing the subgroups of a finite group. It allows us to determine the number of subgroups of a given order, which is useful in many applications, such as studying the structure of solvable and simple groups. The theorems also provide information about the normalizers of subgroups, which can be used to study normal subgroups and quotient groups.   In general, can be deduced from part one of . For say . Then there exists a Sylow -subgroup of . Pick any , . Then for some . Then has order .   Recalling , we have the following:  Sylow Subgroup Normal iff Unique   A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of .    Order of  Prove that has precisely three distinct subgroups of order , all of which are isomorphic to    Any subgroup of of order is a Sylow -subgroup. By , the number of Sylow -subgroups is either or . As any -cycle or -cycle must be contained in a Sylow -subgroup (since such elements generate subgroups of order , for some ) and there are six -cycles and six -cycles, there has to be more than one Sylow -subgroup. Hence, there are precisely distinct subgroups of order .  As all of them are conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic. Hence, we just need to show that contains a subgroup isomorphic to . Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .       Groups of prime order are cyclic, and the center of any group of prime power order is nontrivial. See: and      tells us that if is a finite group and is a prime number dividing , then has an element of order .    A of is a subgroup whose order is the highest conceivable power of possible.     tells us and . Furthermore, acts transitively on the set of Sylow -subgroups by conjugation, making them all conjugate to one another.    A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of . See:      "
},
{
  "id": "def-p-group",
  "level": "2",
  "url": "sec-sylow.html#def-p-group",
  "type": "Definition",
  "number": "6.1",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-group.",
  "body": "-group   For a prime number , a -group is a group of order for some . -group    "
},
{
  "id": "thm-center-pgroup",
  "level": "2",
  "url": "sec-sylow.html#thm-center-pgroup",
  "type": "Theorem",
  "number": "6.2",
  "title": "Center of <span class=\"process-math\">\\(p\\)<\/span>-group is Nontrivial.",
  "body": "Center of -group is Nontrivial   If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than as in . Then for each , so . Since , it follows that for each . From we deduce that so, .   "
},
{
  "id": "thm-order-p-cyclic",
  "level": "2",
  "url": "sec-sylow.html#thm-order-p-cyclic",
  "type": "Theorem",
  "number": "6.3",
  "title": "Order <span class=\"process-math\">\\(p\\)<\/span> and <span class=\"process-math\">\\(p^2\\)<\/span>.",
  "body": "Order and   Let be prime.   Any group of order is cyclic.    Any group of order is abelian.      "
},
{
  "id": "thm-cauchy",
  "level": "2",
  "url": "sec-sylow.html#thm-cauchy",
  "type": "Theorem",
  "number": "6.4",
  "title": "Cauchy’s Theorem.",
  "body": "Cauchy's Theorem  Cauchy's theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)   "
},
{
  "id": "def-sylow-subgroup",
  "level": "2",
  "url": "sec-sylow.html#def-sylow-subgroup",
  "type": "Definition",
  "number": "6.5",
  "title": "Sylow <span class=\"process-math\">\\(p\\)<\/span>-subgroup.",
  "body": "Sylow -subgroup   Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to .  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups. Sylow -subgroup      "
},
{
  "id": "subsec-sylow-3",
  "level": "2",
  "url": "sec-sylow.html#subsec-sylow-3",
  "type": "Remark",
  "number": "6.6",
  "title": "",
  "body": " We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .  "
},
{
  "id": "ex-d2n-sylow",
  "level": "2",
  "url": "sec-sylow.html#ex-d2n-sylow",
  "type": "Example",
  "number": "6.7",
  "title": "Sylow Subgroups in <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Sylow Subgroups in  In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .  "
},
{
  "id": "ex-s5-sylow",
  "level": "2",
  "url": "sec-sylow.html#ex-s5-sylow",
  "type": "Example",
  "number": "6.8",
  "title": "Sylow Subgroups in <span class=\"process-math\">\\(S_{5}\\)<\/span>.",
  "body": "Sylow Subgroups in  In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are five cycles, but there are four of these in every Sylow -subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are three cycles, but there are two of these in every Sylow -subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.  "
},
{
  "id": "prop-syl-act",
  "level": "2",
  "url": "sec-sylow.html#prop-syl-act",
  "type": "Proposition",
  "number": "6.9",
  "title": "",
  "body": "  If is a finite group and is a prime with , then acts on the set of its Sylow -subgroups via conjugation.   "
},
{
  "id": "subsec-sylows-theorem-3",
  "level": "2",
  "url": "sec-sylow.html#subsec-sylows-theorem-3",
  "type": "Remark",
  "number": "6.10",
  "title": "",
  "body": " As of now, for all we know, this might be the action on the empty set, but we'll see in a bit that the set of Sylow -subgroups is in fact not empty.  "
},
{
  "id": "lem-syl-lem",
  "level": "2",
  "url": "sec-sylow.html#lem-syl-lem",
  "type": "Lemma",
  "number": "6.11",
  "title": "Sylow’s Lemma.",
  "body": "Sylow's Lemma   Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .    Since , we have . For the reverse containment, let . Since , is a subgroup of . (Technically, we only proved is a subgroup if , but the proof applies verbatim provided the weaker condition holds.) Also and since each of , , and is a power of , is a -subgroup of . But and is a -subgroup of largest possible order. So . This proves and thus .   "
},
{
  "id": "thm-sylow",
  "level": "2",
  "url": "sec-sylow.html#thm-sylow",
  "type": "Theorem",
  "number": "6.12",
  "title": "Sylow’s Theorems.",
  "body": "Sylow's Theorems  Sylow's theorems   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence           Recall that we write where . We need to prove contains a subgroup of order , and we proceed by induction on .  If or, more generally, if , then is a Sylow -subgroup. We may thus assume . We proceed by considering two cases, depending on whether or not divides .  If , then by , there is an element of order . Set . Since , we have . Since , by induction has a subgroup of order (i.e. of index ). By , this subgroup corresponds to a subgroup of of index , hence of order .  For the second case, assume and consider the for : where are a complete and non-redundant list of non-central conjugacy class representatives. Since and , we must have for at least one . For this , we have where . Since is not central, and hence, by induction, contains a subgroup of order . But this subgroup is also a subgroup of .    Let be a Sylow -subgroup and let be any -subgroup. Let denote the collection of all conjugates of : Part (3) tells us the consists of all Sylow -subgroups of , but we don't yet know this. Nonetheless, acts (transitively) on by conjugation, and thus also acts on (not necessarily transitively). The key to proving parts (2) and (3) of the Sylow Theorem is to analyse the action of on to establish and below.  Let be the orbits of the action of on , and for each pick a representative . We have , where the last equation uses the Lemma. By LOIS, we thus have and hence   This equation holds for any -subgroup of . In particular, we can take . In this case the first term is and, since for all , the remaining terms are divisible by . This gives (This does not yet prove part (3) since we don't yet know that consists of all Sylow -subgroups.)  We can now prove part (2): By way of contradiction, suppose is a -subgroup of such that is not contained in any of the subgroups belonging to . Then for all and thus every term on the right-hand side of is divisble by , contrary to . The second assertion in (2) follows by taking to be a Sylow -subgroup.  This proves, in particular, that in fact does consist of all Sylow -subgroups.    Part (3) thus follows from .    For any , the stabilizer of for the action of on by conjugation is . Since we now know the action is transitive, Moreover, since and , it follows that .      "
},
{
  "id": "subsec-sylows-theorem-8",
  "level": "2",
  "url": "sec-sylow.html#subsec-sylows-theorem-8",
  "type": "Remark",
  "number": "6.13",
  "title": "",
  "body": " In general, can be deduced from part one of . For say . Then there exists a Sylow -subgroup of . Pick any , . Then for some . Then has order .  "
},
{
  "id": "cor-unique-sylow-normal",
  "level": "2",
  "url": "sec-sylow.html#cor-unique-sylow-normal",
  "type": "Corollary",
  "number": "6.14",
  "title": "Sylow Subgroup Normal iff Unique.",
  "body": "Sylow Subgroup Normal iff Unique   A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of .   "
},
{
  "id": "exe-order-8-subgroups-of-s4",
  "level": "2",
  "url": "sec-sylow.html#exe-order-8-subgroups-of-s4",
  "type": "Exercise",
  "number": "6.15",
  "title": "Order <span class=\"process-math\">\\(8\\)<\/span> of <span class=\"process-math\">\\(S_4\\)<\/span>.",
  "body": "Order of  Prove that has precisely three distinct subgroups of order , all of which are isomorphic to    Any subgroup of of order is a Sylow -subgroup. By , the number of Sylow -subgroups is either or . As any -cycle or -cycle must be contained in a Sylow -subgroup (since such elements generate subgroups of order , for some ) and there are six -cycles and six -cycles, there has to be more than one Sylow -subgroup. Hence, there are precisely distinct subgroups of order .  As all of them are conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic. Hence, we just need to show that contains a subgroup isomorphic to . Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .  "
},
{
  "id": "sec-sylow-6",
  "level": "2",
  "url": "sec-sylow.html#sec-sylow-6",
  "type": "Summary",
  "number": "6.1",
  "title": "",
  "body": "   Groups of prime order are cyclic, and the center of any group of prime power order is nontrivial. See: and      tells us that if is a finite group and is a prime number dividing , then has an element of order .    A of is a subgroup whose order is the highest conceivable power of possible.     tells us and . Furthermore, acts transitively on the set of Sylow -subgroups by conjugation, making them all conjugate to one another.    A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of . See:     "
},
{
  "id": "sec-simple-groups",
  "level": "1",
  "url": "sec-simple-groups.html",
  "type": "Section",
  "number": "6.2",
  "title": "Simple Groups",
  "body": "Simple Groups     Everything should be made as simple as possible, but not simpler.   Albert Einstein    Keeping it Simple  Simple Group   A group is called simple if it has only two normal subgroups: itself and the trivial subgroup. simple group     Simple   for a prime is simple since any non-trivial element generates the whole group.   No Simple Groups of Order (Counting Elements)  counting elements  element counting argument   Let us prove that no group or order is simple.    Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .   gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By  for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.     In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.   No Simple Groups of Order (Group Actions)  group action argument   No group of order is simple.    By way of contradiciton suppose is simple and . gives and (since they cannot be by the assumption that is simple). The counting elements trick would work, but let's proceed in a different way: Consider the action of on by conjugation and let be the associated homomorphism (obtained by choosing a numbering of the members of ). The map is non-trivial since the action is transitive (part (2) of ). But does not divide and so cannot be injective. It follows that is a non-trivial, proper normal subgroup of , a contradiction.    No Simple Groups of Order (Normalizers)  normalizer argument   No group of order is simple.    By way of contradiction suppose is a simple group of order . Since , we conclude from that   If any of these is , then the corresonding Sylow -subgroup is unique and hence normal, a contradiction.  Although it is not actually needed here, let's show cannot be or . For example, if it were , then the action of on (by conjugation) gives a homomorphism . Since the action is transitive, this homomorphism cannot be the trivial map. Since does not divide , this map cannot be injective. Thus the kernel of is a non-trivial, proper normal subgroup, a contradiction. In a similar way one shows .  We have shown that the only possibility is One is now tempted to count elements: we have elements of order and elements of order . But elements of order are not so easy to count since the various Sylow -subgroups have nine elements each and might interect in subsets of order . The only obvious things is that there are at least of them. This does not give enough elements to reach a contradiction.  The action of on leads to a homomorphism , but since does divide , there is no contradiction lurking here either.  So, we must resort to something really sneaky: let be all of the Sylow -subgroups. Observe that if  for all , then we would have elements of order or . This would give at least elements, which is not possible. So, it must be the case that at least two intersect non-trivially. Without loss, let's say is such that . We ponder . Since is abelian and , , so that . Likewise, too, and since , we get . And of course . We get only three possibilities: Let us show that each is impossible:  If , then we have constructed a subgroup of of index . The action of on the left cosets gives a homomorphism that cannot be the trivial map since the action is transitive. But it cannot be injective either, and this leads to a non-trivial nomal subgroup. The exact same reasoning shows cannot be (or we could use that it has index ). Finally, if , then , which is also impossible.    is Simple    is simple.    the Unique Simple Group of Order   If is a simple group of order , then .    Assume is simple of order . Let us first observe that it suffices to construct a non-trivial action of on a set with elements. For given such an action we obtain a non-trivial homomorphism . Since it's non-trivial and is simple, we must have , so that is injective. Thus , and . But we already know that is the only subgroup of of order , and thus .  So, we only need to find such an action, and one's first guess would be the action on one of the sets of Sylow -subgroups. By Sylow Theory and the fact that is simple (so that no Sylow -subgroup for can be unique) we get   The next important observation is:   There is no non-trivial action of on a set of size at most .   For if there was such a non-trivial action, we would get a homomorphism for (if , the only action is the trivial one). Such a homomorphism cannot be injective by order considerations. So, it's kernel would be a proper, non-trivial normal subgroup, which do not exist.  In particular, and , so that   If then we are done, since this action is transitive and thus certainly non-trivial.  Suppose and let be all the Sylow -subgroups. Since and , has elements of order or . If for all , we would have elements of order or , which is far too many elements in total. At least two of these must therefore intersect non-trivially and without loss say has two elements. We consider . As in the preivious example, and hence , , and . The possibilities are If then , which is impossible. If , then we obtain an transitive action of on the three element set of left cosets of in , which as shown above is not possible. We are left with . Thus acts transitively (and hence non-trivially) on the five element set of left cosets of in .     The proof shows that if either or , but in hindsight only one of these can actually be possible. It's actually the former: has no elements of order (since four cycles are odd permuations) and the only elements of order are products of two disjoint transpotions, and there are such elements. It's not hard to see that the five -element subgroups of given by the Klein -group and its obvious conjugates (i.e., those obtained by leaving out one of instead of ) are the only Sylow -subgoups of .    A Wealth of Problems on Simple Groups   Let G be a group of order . Prove that is not simple.   By we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the . This map is non-trivial from part (2) of , but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of by . Thus is not simple.    Let be a group of order .    Show that there are at most two options for , the number of Sylow -subgroups of and list them.  Prove that is not simple.     Let be a group of order .     By we know that and . The possible options are thus and .    Suppose by way of contradiction that is simple. Thus , so . Let act on by conjugation, yielding the homomorphism granted via the . By (2) in we see that is not trivial. As we see that , meaning that the is non-trivial, yielding a non-trivial normal subgroup of , a contradiction.       Let be a finite group of order with prime numbers. Show that is not a simple group.   Let be a finite group of order with prime numbers, and suppose by way of contradiction that is simple. By we have the following: - and , and thus . - and , and thus . From this information we see that there are elements of order and elements of order , for a lovely total of elements, which is too many.      Let be a simple group of order . Determine the number of elements of of order .  Show that there is no simple group of order .        Let be a simple group of order . By we know that and that . hus the options for are and . Since is simple we see that . As each Sylow -subgroup of has unique elements of order and the identity we see that the number of elements or order in is .    Suppose by way of contradiction that is a simple group of order . Similarly to above, , yielding elements of order . Now, and , so , yielding far too many elements to fit in .       Prove that no group of order is simple.   Let be a group of order and suppose by way of contradiction that is simple. Notice that . By , we know and divides , the only options are thus and . Since is simple, there must be exactly , where . Let act on by conjugation. Thus is a group homomorphism. Note that , and that the order of does not divide . By Part (2) of this action is transitive, meaning that the kernel of cannot be trivial. Thus is a nontrivial normal subgroup of , a contradiction. Thus no group of order is simple.       A is a group with only two normal subgroups: itself and the trivial subgroup.    We have three main strategies to prove that a group is simple: by counting elements, acting on a set of Sylow -subgroups, or by resorting to diving into the minutae with normalizers. For examples of each, see , , and , respectively.      is simple.     "
},
{
  "id": "def-simple-group",
  "level": "2",
  "url": "sec-simple-groups.html#def-simple-group",
  "type": "Definition",
  "number": "6.16",
  "title": "Simple Group.",
  "body": "Simple Group   A group is called simple if it has only two normal subgroups: itself and the trivial subgroup. simple group    "
},
{
  "id": "subsec-simple-3",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-3",
  "type": "Example",
  "number": "6.17",
  "title": "<span class=\"process-math\">\\(\\mathbb{Z}\/p\\)<\/span> Simple.",
  "body": "Simple   for a prime is simple since any non-trivial element generates the whole group.  "
},
{
  "id": "ex-no-order-12-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-12-simple",
  "type": "Example",
  "number": "6.18",
  "title": "No Simple Groups of Order <span class=\"process-math\">\\(12\\)<\/span> (Counting Elements).",
  "body": "No Simple Groups of Order (Counting Elements)  counting elements  element counting argument   Let us prove that no group or order is simple.    Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .   gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By  for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.   "
},
{
  "id": "subsec-simple-5",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-5",
  "type": "Remark",
  "number": "6.19",
  "title": "",
  "body": " In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.  "
},
{
  "id": "ex-no-order-80-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-80-simple",
  "type": "Example",
  "number": "6.20",
  "title": "No Simple Groups of Order <span class=\"process-math\">\\(80\\)<\/span> (Group Actions).",
  "body": "No Simple Groups of Order (Group Actions)  group action argument   No group of order is simple.    By way of contradiciton suppose is simple and . gives and (since they cannot be by the assumption that is simple). The counting elements trick would work, but let's proceed in a different way: Consider the action of on by conjugation and let be the associated homomorphism (obtained by choosing a numbering of the members of ). The map is non-trivial since the action is transitive (part (2) of ). But does not divide and so cannot be injective. It follows that is a non-trivial, proper normal subgroup of , a contradiction.   "
},
{
  "id": "ex-no-order-90-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-90-simple",
  "type": "Example",
  "number": "6.21",
  "title": "No Simple Groups of Order <span class=\"process-math\">\\(90\\)<\/span> (Normalizers).",
  "body": "No Simple Groups of Order (Normalizers)  normalizer argument   No group of order is simple.    By way of contradiction suppose is a simple group of order . Since , we conclude from that   If any of these is , then the corresonding Sylow -subgroup is unique and hence normal, a contradiction.  Although it is not actually needed here, let's show cannot be or . For example, if it were , then the action of on (by conjugation) gives a homomorphism . Since the action is transitive, this homomorphism cannot be the trivial map. Since does not divide , this map cannot be injective. Thus the kernel of is a non-trivial, proper normal subgroup, a contradiction. In a similar way one shows .  We have shown that the only possibility is One is now tempted to count elements: we have elements of order and elements of order . But elements of order are not so easy to count since the various Sylow -subgroups have nine elements each and might interect in subsets of order . The only obvious things is that there are at least of them. This does not give enough elements to reach a contradiction.  The action of on leads to a homomorphism , but since does divide , there is no contradiction lurking here either.  So, we must resort to something really sneaky: let be all of the Sylow -subgroups. Observe that if  for all , then we would have elements of order or . This would give at least elements, which is not possible. So, it must be the case that at least two intersect non-trivially. Without loss, let's say is such that . We ponder . Since is abelian and , , so that . Likewise, too, and since , we get . And of course . We get only three possibilities: Let us show that each is impossible:  If , then we have constructed a subgroup of of index . The action of on the left cosets gives a homomorphism that cannot be the trivial map since the action is transitive. But it cannot be injective either, and this leads to a non-trivial nomal subgroup. The exact same reasoning shows cannot be (or we could use that it has index ). Finally, if , then , which is also impossible.   "
},
{
  "id": "thm-a5-simple",
  "level": "2",
  "url": "sec-simple-groups.html#thm-a5-simple",
  "type": "Theorem",
  "number": "6.22",
  "title": "<span class=\"process-math\">\\(A_5\\)<\/span> is Simple.",
  "body": "is Simple    is simple.   "
},
{
  "id": "thm-simple-60",
  "level": "2",
  "url": "sec-simple-groups.html#thm-simple-60",
  "type": "Theorem",
  "number": "6.23",
  "title": "<span class=\"process-math\">\\(A_5\\)<\/span> the Unique Simple Group of Order <span class=\"process-math\">\\(60\\)<\/span>.",
  "body": "the Unique Simple Group of Order   If is a simple group of order , then .    Assume is simple of order . Let us first observe that it suffices to construct a non-trivial action of on a set with elements. For given such an action we obtain a non-trivial homomorphism . Since it's non-trivial and is simple, we must have , so that is injective. Thus , and . But we already know that is the only subgroup of of order , and thus .  So, we only need to find such an action, and one's first guess would be the action on one of the sets of Sylow -subgroups. By Sylow Theory and the fact that is simple (so that no Sylow -subgroup for can be unique) we get   The next important observation is:   There is no non-trivial action of on a set of size at most .   For if there was such a non-trivial action, we would get a homomorphism for (if , the only action is the trivial one). Such a homomorphism cannot be injective by order considerations. So, it's kernel would be a proper, non-trivial normal subgroup, which do not exist.  In particular, and , so that   If then we are done, since this action is transitive and thus certainly non-trivial.  Suppose and let be all the Sylow -subgroups. Since and , has elements of order or . If for all , we would have elements of order or , which is far too many elements in total. At least two of these must therefore intersect non-trivially and without loss say has two elements. We consider . As in the preivious example, and hence , , and . The possibilities are If then , which is impossible. If , then we obtain an transitive action of on the three element set of left cosets of in , which as shown above is not possible. We are left with . Thus acts transitively (and hence non-trivially) on the five element set of left cosets of in .   "
},
{
  "id": "subsec-simple-10",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-10",
  "type": "Remark",
  "number": "6.24",
  "title": "",
  "body": " The proof shows that if either or , but in hindsight only one of these can actually be possible. It's actually the former: has no elements of order (since four cycles are odd permuations) and the only elements of order are products of two disjoint transpotions, and there are such elements. It's not hard to see that the five -element subgroups of given by the Klein -group and its obvious conjugates (i.e., those obtained by leaving out one of instead of ) are the only Sylow -subgoups of .  "
},
{
  "id": "subsec-simple-qual-2",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-qual-2",
  "type": "Exercise",
  "number": "6.25",
  "title": "",
  "body": " Let G be a group of order . Prove that is not simple.   By we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the . This map is non-trivial from part (2) of , but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of by . Thus is not simple.  "
},
{
  "id": "subsec-simple-qual-3",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-qual-3",
  "type": "Exercise",
  "number": "6.26",
  "title": "",
  "body": " Let be a group of order .    Show that there are at most two options for , the number of Sylow -subgroups of and list them.  Prove that is not simple.     Let be a group of order .     By we know that and . The possible options are thus and .    Suppose by way of contradiction that is simple. Thus , so . Let act on by conjugation, yielding the homomorphism granted via the . By (2) in we see that is not trivial. As we see that , meaning that the is non-trivial, yielding a non-trivial normal subgroup of , a contradiction.     "
},
{
  "id": "subsec-simple-qual-4",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-qual-4",
  "type": "Exercise",
  "number": "6.27",
  "title": "",
  "body": " Let be a finite group of order with prime numbers. Show that is not a simple group.   Let be a finite group of order with prime numbers, and suppose by way of contradiction that is simple. By we have the following: - and , and thus . - and , and thus . From this information we see that there are elements of order and elements of order , for a lovely total of elements, which is too many.  "
},
{
  "id": "subsec-simple-qual-5",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-qual-5",
  "type": "Exercise",
  "number": "6.28",
  "title": "",
  "body": "   Let be a simple group of order . Determine the number of elements of of order .  Show that there is no simple group of order .        Let be a simple group of order . By we know that and that . hus the options for are and . Since is simple we see that . As each Sylow -subgroup of has unique elements of order and the identity we see that the number of elements or order in is .    Suppose by way of contradiction that is a simple group of order . Similarly to above, , yielding elements of order . Now, and , so , yielding far too many elements to fit in .     "
},
{
  "id": "subsec-simple-qual-6",
  "level": "2",
  "url": "sec-simple-groups.html#subsec-simple-qual-6",
  "type": "Exercise",
  "number": "6.29",
  "title": "",
  "body": " Prove that no group of order is simple.   Let be a group of order and suppose by way of contradiction that is simple. Notice that . By , we know and divides , the only options are thus and . Since is simple, there must be exactly , where . Let act on by conjugation. Thus is a group homomorphism. Note that , and that the order of does not divide . By Part (2) of this action is transitive, meaning that the kernel of cannot be trivial. Thus is a nontrivial normal subgroup of , a contradiction. Thus no group of order is simple.  "
},
{
  "id": "sec-simple-groups-5",
  "level": "2",
  "url": "sec-simple-groups.html#sec-simple-groups-5",
  "type": "Summary",
  "number": "6.2",
  "title": "",
  "body": "   A is a group with only two normal subgroups: itself and the trivial subgroup.    We have three main strategies to prove that a group is simple: by counting elements, acting on a set of Sylow -subgroups, or by resorting to diving into the minutae with normalizers. For examples of each, see , , and , respectively.      is simple.    "
},
{
  "id": "sec-solvable",
  "level": "1",
  "url": "sec-solvable.html",
  "type": "Section",
  "number": "6.3",
  "title": "Solvable Groups (*)",
  "body": "Solvable Groups (*)     Everything should be made as simple as possible, but not simpler.   Albert Einstein    Composition Series    A normal series is called a composition series if each subqoutient is a simple group.     Suppose is cyclic of order and say is a prime factorization of . Then the factors of are of order , respectively, and hence are all simple groups. Thus the composition factors of are      is a normal series. Since is cyclic of order , it has a composition series as in the previous example. By inserting this into the length two normal series given here, we obtain a composition series of with composition factors      Assume is a group and . If and both have composition series, then so does . Moreover, in this case, the list of composition factors of is the concatenation of the lists of composition factors of and .    This is a consequence of the Isomorphism Theorems. In detail, a composition series for has the form where . If is a composition seires for , then is a composition series for since for all . (For the case , interpret as .)     As you showed in the homework, has a normal subgroup of order . has a composition series of the form and so the composition factors of are .  The group has order and it has an element of order , namely . If is any group of oder with an element or order , then the composition factors of are . (In fact, every group of order has an element of order .) To see this, note that is normal in since it has index two.  Using the Proposition, the compition factors of are   We can make this more explicit too. The subgroup of generated by corresponds to the subgroup of that is generated by the elements of along with . We have with factors .    The composition factors of are and . This holds since , , and is simple, facts that we will prove later.   We close this subsection with some big-picture type comments. A normal subgroup of a group is analogous to a factor of an integer, and a composition series of a finite group is analogous to a prime factorizations of integers. In this analogy, the role of a prime number is played by a simple group. One major difference is that, unlike for prime factorizations, the list of composition factors of a group do not uniquely determine the group since, for example, and (and, for that matter, any solvable group of order ) have the same composition factors but are certainly not isomorphic.  Nonetheless, a major motivating idea in finite group theory is the following: In order to know everything about finite group theory, one merely needs to know:   a complete list of all simple groups and    a method of reconstructing all possible finite groups having a given list of composition factors.     The former task was essentially accomplished by the 1980's, when all finite simple groups were classified into a handful of families along with  sporadic simple groups. The latter task is probably not really possible as stated here. But, there is a large collection of properties of finite groups such that if holds for all members of a compostion series of a given group then also holds for the group itself. For such a property , it suffices to check that holds true for every finite simple group. This technique has been used with success.   Solvable Groups    The What, Where, and Why of Group Presentations   Why are solvable groups important? Where are they found? What are they used for?      Galois Theory  A key result of Galois theory is that a polynomial equation is solvable by radicals (i.e., its roots can be expressed using basic arithmetic operations and roots) if and only if its associated Galois group is solvable. This result connects group theory directly to classical problems in algebra.   Lie Groups and Algebraic Groups  In the study of Lie groups, solvable groups often serve as a starting point for understanding more complex groups. A classic example is the Borel subgroups in the theory of algebraic groups, which are connected solvable groups and play a central role in the classification of algebraic groups.   Representation Theory  The representations of solvable groups are particularly well-understood due to the fact that these groups have abelian quotients at each level of their derived series. This allows techniques from the representation theory of abelian groups to be extended to solvable groups.   Topology  In the classification of -manifolds, the fundamental group of certain types of 3-manifolds (such as Seifert-fibered spaces) is solvable. Understanding these groups is crucial for classifying the topology of the manifold.   Algebraic Geometry  The knot group of a knot in -dimensional space is the fundamental group of the knot complement (the space obtained by removing the knot from ). This group is often described using a group presentation.   Cryptography  Cryptographic protocols, such as those based on the discrete logarithm problem or the conjugacy search problem, sometimes use solvable or nearly solvable groups due to their structured nature.        "
},
{
  "id": "def-composition-series",
  "level": "2",
  "url": "sec-solvable.html#def-composition-series",
  "type": "Definition",
  "number": "6.30",
  "title": "",
  "body": "  A normal series is called a composition series if each subqoutient is a simple group.   "
},
{
  "id": "subsec-composition-series-3",
  "level": "2",
  "url": "sec-solvable.html#subsec-composition-series-3",
  "type": "Example",
  "number": "6.31",
  "title": "",
  "body": " Suppose is cyclic of order and say is a prime factorization of . Then the factors of are of order , respectively, and hence are all simple groups. Thus the composition factors of are   "
},
{
  "id": "subsec-composition-series-4",
  "level": "2",
  "url": "sec-solvable.html#subsec-composition-series-4",
  "type": "Example",
  "number": "6.32",
  "title": "",
  "body": "  is a normal series. Since is cyclic of order , it has a composition series as in the previous example. By inserting this into the length two normal series given here, we obtain a composition series of with composition factors   "
},
{
  "id": "prop-solv-1",
  "level": "2",
  "url": "sec-solvable.html#prop-solv-1",
  "type": "Proposition",
  "number": "6.33",
  "title": "",
  "body": "  Assume is a group and . If and both have composition series, then so does . Moreover, in this case, the list of composition factors of is the concatenation of the lists of composition factors of and .    This is a consequence of the Isomorphism Theorems. In detail, a composition series for has the form where . If is a composition seires for , then is a composition series for since for all . (For the case , interpret as .)   "
},
{
  "id": "subsec-composition-series-6",
  "level": "2",
  "url": "sec-solvable.html#subsec-composition-series-6",
  "type": "Example",
  "number": "6.34",
  "title": "",
  "body": " As you showed in the homework, has a normal subgroup of order . has a composition series of the form and so the composition factors of are .  The group has order and it has an element of order , namely . If is any group of oder with an element or order , then the composition factors of are . (In fact, every group of order has an element of order .) To see this, note that is normal in since it has index two.  Using the Proposition, the compition factors of are   We can make this more explicit too. The subgroup of generated by corresponds to the subgroup of that is generated by the elements of along with . We have with factors .  "
},
{
  "id": "subsec-composition-series-7",
  "level": "2",
  "url": "sec-solvable.html#subsec-composition-series-7",
  "type": "Example",
  "number": "6.35",
  "title": "",
  "body": " The composition factors of are and . This holds since , , and is simple, facts that we will prove later.  "
},
{
  "id": "subsec-solvable-3",
  "level": "2",
  "url": "sec-solvable.html#subsec-solvable-3",
  "type": "Question",
  "number": "6.36",
  "title": "The What, Where, and Why of Group Presentations.",
  "body": "The What, Where, and Why of Group Presentations   Why are solvable groups important? Where are they found? What are they used for?      Galois Theory  A key result of Galois theory is that a polynomial equation is solvable by radicals (i.e., its roots can be expressed using basic arithmetic operations and roots) if and only if its associated Galois group is solvable. This result connects group theory directly to classical problems in algebra.   Lie Groups and Algebraic Groups  In the study of Lie groups, solvable groups often serve as a starting point for understanding more complex groups. A classic example is the Borel subgroups in the theory of algebraic groups, which are connected solvable groups and play a central role in the classification of algebraic groups.   Representation Theory  The representations of solvable groups are particularly well-understood due to the fact that these groups have abelian quotients at each level of their derived series. This allows techniques from the representation theory of abelian groups to be extended to solvable groups.   Topology  In the classification of -manifolds, the fundamental group of certain types of 3-manifolds (such as Seifert-fibered spaces) is solvable. Understanding these groups is crucial for classifying the topology of the manifold.   Algebraic Geometry  The knot group of a knot in -dimensional space is the fundamental group of the knot complement (the space obtained by removing the knot from ). This group is often described using a group presentation.   Cryptography  Cryptographic protocols, such as those based on the discrete logarithm problem or the conjugacy search problem, sometimes use solvable or nearly solvable groups due to their structured nature.      "
},
{
  "id": "sec-dps",
  "level": "1",
  "url": "sec-dps.html",
  "type": "Section",
  "number": "7.1",
  "title": "Direct Products",
  "body": "Direct Products   We now discuss how to build new groups from old ones.   Direct Products of Groups    Evil is the product of the ability of humans to make abstract that which is concrete.   John-Paul Sartre   Direct Product   Let be a group for all in an index set . The direct product of the groups is the Cartesian product with multiplication defined by The direct sum of the groups is the subset of the direct product given by with the same multiplication as the direct product. direct product (of groups)  direct sum (of groups)      In latex , is written using \\prod and is written using \\bigoplus     A direct sum is the same thing as a finite direct product.   Direct Product of Groups is a Group   The direct product of a collection of groups is a group, and the direct sum of the collection is a subgroup of the direct product.     The direct sum notation will not be seen or heard from again in group theory. It was fun while it lasted.   Properties of Direct Products      The direct product of groups is abelian if and only if every factor of the product is abelian.    Let be a direct product of groups. If is a direct product of subgroups of , then .    If and , then .    Let . Then .       Direct Products and Homomorphisms      Let and be groups. Then the projection map is a surjective homomorphism of groups.    Let and be groups. Then the inclusion map is an injective homomorphism of groups.       Direct Product of Cyclic Groups  direct product (of cyclic groups)  If then . Indeed consider the elements and in . Then and . Therefore . Since and both of these sets have cardinality it must be the case that . Since and are both cyclic groups of order they are isomorphic. Thus    No Cancellation in Products  Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.    Internal and External Direct Products    Don't worry when you are not recognized, but strive to be worthy of recognition.   Abraham Lincoln   Recognition Theorem for Direct Products  recognition theorem (for direct products)   Suppose is a group with normal subgroups and such that . Then the following hold:    via the isomorphism of groups defined by .          .       Notice that the hypothesis implies . Furthermore and imply that the elements of commute with the elements of . Indeed, consider . Then since , , so also . Similarly it follows that , but since it follows that , i.e. for any .  Using the above we have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism.    Internal and External Direct Products   If and are such that then we call the internal direct product of and and the external direct product of and . internal direct product (of groups)  external direct product (of groups)         The of groups is again a group. See: .      .    We define and identify them with the , the requirement being and .     "
},
{
  "id": "def-dp-external",
  "level": "2",
  "url": "sec-dps.html#def-dp-external",
  "type": "Definition",
  "number": "7.1",
  "title": "Direct Product.",
  "body": "Direct Product   Let be a group for all in an index set . The direct product of the groups is the Cartesian product with multiplication defined by The direct sum of the groups is the subset of the direct product given by with the same multiplication as the direct product. direct product (of groups)  direct sum (of groups)    "
},
{
  "id": "subsec-external-dps-revisited-5",
  "level": "2",
  "url": "sec-dps.html#subsec-external-dps-revisited-5",
  "type": "Remark",
  "number": "7.2",
  "title": "",
  "body": " A direct sum is the same thing as a finite direct product.  "
},
{
  "id": "thm-dp-a-group",
  "level": "2",
  "url": "sec-dps.html#thm-dp-a-group",
  "type": "Theorem",
  "number": "7.3",
  "title": "Direct Product of Groups is a Group.",
  "body": "Direct Product of Groups is a Group   The direct product of a collection of groups is a group, and the direct sum of the collection is a subgroup of the direct product.   "
},
{
  "id": "subsec-external-dps-revisited-7",
  "level": "2",
  "url": "sec-dps.html#subsec-external-dps-revisited-7",
  "type": "Remark",
  "number": "7.4",
  "title": "",
  "body": " The direct sum notation will not be seen or heard from again in group theory. It was fun while it lasted.  "
},
{
  "id": "thm-dp-properties",
  "level": "2",
  "url": "sec-dps.html#thm-dp-properties",
  "type": "Theorem",
  "number": "7.5",
  "title": "Properties of Direct Products.",
  "body": "Properties of Direct Products      The direct product of groups is abelian if and only if every factor of the product is abelian.    Let be a direct product of groups. If is a direct product of subgroups of , then .    If and , then .    Let . Then .      "
},
{
  "id": "thm-dps-and-homs",
  "level": "2",
  "url": "sec-dps.html#thm-dps-and-homs",
  "type": "Theorem",
  "number": "7.6",
  "title": "Direct Products and Homomorphisms.",
  "body": "Direct Products and Homomorphisms      Let and be groups. Then the projection map is a surjective homomorphism of groups.    Let and be groups. Then the inclusion map is an injective homomorphism of groups.      "
},
{
  "id": "ex-dp-cyclic",
  "level": "2",
  "url": "sec-dps.html#ex-dp-cyclic",
  "type": "Example",
  "number": "7.7",
  "title": "Direct Product of Cyclic Groups.",
  "body": "Direct Product of Cyclic Groups  direct product (of cyclic groups)  If then . Indeed consider the elements and in . Then and . Therefore . Since and both of these sets have cardinality it must be the case that . Since and are both cyclic groups of order they are isomorphic. Thus   "
},
{
  "id": "exe-no-group-cancellation-in-products",
  "level": "2",
  "url": "sec-dps.html#exe-no-group-cancellation-in-products",
  "type": "Exercise",
  "number": "7.8",
  "title": "No Cancellation in Products.",
  "body": "No Cancellation in Products  Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.  "
},
{
  "id": "thm-dp-recognition",
  "level": "2",
  "url": "sec-dps.html#thm-dp-recognition",
  "type": "Theorem",
  "number": "7.9",
  "title": "Recognition Theorem for Direct Products.",
  "body": "Recognition Theorem for Direct Products  recognition theorem (for direct products)   Suppose is a group with normal subgroups and such that . Then the following hold:    via the isomorphism of groups defined by .          .       Notice that the hypothesis implies . Furthermore and imply that the elements of commute with the elements of . Indeed, consider . Then since , , so also . Similarly it follows that , but since it follows that , i.e. for any .  Using the above we have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism.   "
},
{
  "id": "def-int-ext-dp",
  "level": "2",
  "url": "sec-dps.html#def-int-ext-dp",
  "type": "Definition",
  "number": "7.10",
  "title": "Internal and External Direct Products.",
  "body": "Internal and External Direct Products   If and are such that then we call the internal direct product of and and the external direct product of and . internal direct product (of groups)  external direct product (of groups)    "
},
{
  "id": "sec-dps-5",
  "level": "2",
  "url": "sec-dps.html#sec-dps-5",
  "type": "Summary",
  "number": "7.1",
  "title": "",
  "body": "   The of groups is again a group. See: .      .    We define and identify them with the , the requirement being and .    "
},
{
  "id": "sec-spds",
  "level": "1",
  "url": "sec-spds.html",
  "type": "Section",
  "number": "7.2",
  "title": "Semidirect Products",
  "body": "Semidirect Products  External Semidirect Products    Don't give up and always keep on believing in your product.   Niels van Deuren   We now discuss an important generalization for the direct product and a new method of constructing a new groups from the action of one group on another.  Suppose is a group with subgroups and such that . Then we still have ; let's see what we would need the multiplication on the cartesian product to be in order for defined by to still be a group homomorphism: where is such that .  This means that we would need to have for to be a homomorphism. This motivates the following definition.  External Semidirect Products   Let and be groups and let be a homomorphism. The (external) semidirect product induced by is the set with the binary operation defined by This group is denoted by .  semidirect product (of groups)  external semidirect product (of groups)      In latex , is written using \\rtimes .     Decide amongst yourselves whether it should be spelled \"semidirect\", \"semi-direct\", \"semi direct\".    Before we prove that the construction above actually gives a group, let's compute a few examples.  Semidirect, Sans the Semi  Given and we could always take to be the trivial homomorphism, so that for all and . Then is just the usual direct product:     Fix a group , a normal subgroup and a subgroup . Then the function given by for is a homomorphism. Thus acts on via automorphisms.    Let be cyclic of order and be cyclic of order for any . There is an automorphism of that sends to . This automorphism is its own inverse; i.e., it has order . Therefore, by , there is a group homomorphism with . We may thus form the group The elements of are for and , in particular . Set Then  and Looks familar!  Indeed, by the universal mapping property for we have a homomorphism such that and . Moreover, is onto since and since it follows that is a bijection. So the dihedral group is a semidirect product, in which the two component groups are cyclic of orders and respectively: and is the inversion homomorphism as described above.   Semidirect Products are Groups   If and are groups and is a homomorphism, then setting:      is a group     and      .          The proof is straightforward but a bit messy. For associativity, note that On the other hand This gives associativity.  The fact that is a two-sided identity follows from the fact that .  Finally and similarly     Define a funtion as . Then is a homomorphism, since The map is clearly injective and hence its image is isomorphic to . In fact, the image is normal since the second component of is clearly . Let us write this image as   The function defined by is also an injective homomorphism and thus its image is isomorphic to . is typically not normal, however. Finally, it is easy to see that and . Putting this all together we have    ,     ,     , and     .       Consider the projection onto the second factor given by . This is a goup homomorphism since the second component of is and is surjective by definition. Now By the we conclude that .        Internal Semidirect Products    I've often said there's nothing better for the inside of a man than the outside of a horse.   Ronald Reagan   We can turn this around. the semidirect product, not the Reagan quote.   Recognition Theorem for Internal Semidirect Products  recognition theorem (for internal semidirect products)   For a group , suppose we are given and so that    ,     ,     , and     .     Let be the permutation representation of the action of on via automorphisms given by in . (This means that for any  , where is the function for all .) Then the function defined by is an isomorphism of groups. Moreover, under this isomorphism, corresponds to and corresponds to (referring to the notation in above).    We have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism. It is obvious that and .    Internal Semidirect Products   In this situation of the , we will say that is the internal semi-direct product of and . internal semidirect product (of groups)      Returning to , let and . Then , , and . So, is isomorphic to a semi-direct product, as we already showed.    Let , and . Then , , and . It follows that where is cyclic of order and the action sends to conjugation by .   It is important to be aware that for a fixed pair of groups and , different actions of on via automorphisms can result in isomorphic semi-direct products. Indeed, determining when is in general a tricky business. The previous example shows this.   Let and again, but this time take (assuming ). Then we get where is cyclic of order and the action sends to conjugation by .  The actions and are not identical. For example, assuming we have and Yet since each is isomorphic to .  On HW 8 you will give a more conceptual reason for why these two semidirect products turned out to be isomorphic: it is because and are conjugate in . More generally, below is a criterion for a two semidirect products to be isomorphic.   Isomorphisms of Semidirect Products   Let be a finite cyclic group and let be an arbitrary group. Suppose that the images of and are conjugate subgroups of . Then .     Groups of Order    I did not know I was in my prime until afterwards.   Mason Cooley   Groups of Order   Any group of order is isomorphic either to or to .    Let be a group of order . gives that there exist elements with and . Let and . Since , is a normal subgroup of and since is a common subgroup of and  gives that . Thus and since we deduce that . now gives that is the internal semidirect product of and . More to the point, , where gives the action of on by .  We now analyze the possibilities for . By , . There are two possibilities for the image of : either or .  If , then (which implies ) and . Therefore, in this case , where the last isomorphism uses the .  If , then is the map and by an earlier example for this we have , so .  Finally, because the former is abelian and the latter is not.    Let's repeat the previous example for classifying groups of order with distinct primes into isomorphism classes.  Classification for Groups of Order  classification of groups of order   Let be primes.     If there is a unique group of order up to isomorphism, namely .    If there are exactly two groups of order up to isomorphism, namely and a non-abelian group.       Let be a group of order and let be Sylow subgroups of order and respectively. We see that is a normal subgroup using , since is the smallest prime that divides .  Furthermore, since is a subgroup of both and we have by that , so that . From here it follows that and so . now yields that for some homomorphism , equivalently . By to give such a homomorphism is equivalent to giving an element so that , which will give for . Thus yielding that either or .   Case 1: if then is the trivial homomorphism and thus .   Case 2: if then it must be the case by Lagrange that . By we know that is a cyclic group. Therefore we have that if and only if there exists an element of order by (2). Moreover any such element generates a subgroup of of order . Since there is a unique subgroup of a cyclic group of a given order by (2) we see that the image of is independent of the choice of . Thus by we conclude that all subgroups resulting from any choice of of order are isomorphic.  Moreover, from the explicit presentation of semidirect products of cyclic groups given in a homework problem we see that the resulting group is non-abelian; in particular it is not isomorphic to .         are defined using homomorphisms into automorphism groups. See: They are often used to construct non-abelian groups.     are similar to their direct counterparts, though only require that one of or be normal. They can be identified using the .    Using semidirect products, we are able to provide a .     "
},
{
  "id": "def-sdp-external",
  "level": "2",
  "url": "sec-spds.html#def-sdp-external",
  "type": "Definition",
  "number": "7.11",
  "title": "External Semidirect Products.",
  "body": "External Semidirect Products   Let and be groups and let be a homomorphism. The (external) semidirect product induced by is the set with the binary operation defined by This group is denoted by .  semidirect product (of groups)  external semidirect product (of groups)    "
},
{
  "id": "subsec-external-sdps-8",
  "level": "2",
  "url": "sec-spds.html#subsec-external-sdps-8",
  "type": "Discussion",
  "number": "7.1",
  "title": "",
  "body": "  Decide amongst yourselves whether it should be spelled \"semidirect\", \"semi-direct\", \"semi direct\".   "
},
{
  "id": "def-trivial-sdp",
  "level": "2",
  "url": "sec-spds.html#def-trivial-sdp",
  "type": "Example",
  "number": "7.12",
  "title": "Semidirect, Sans the Semi.",
  "body": "Semidirect, Sans the Semi  Given and we could always take to be the trivial homomorphism, so that for all and . Then is just the usual direct product:   "
},
{
  "id": "subsec-external-sdps-11",
  "level": "2",
  "url": "sec-spds.html#subsec-external-sdps-11",
  "type": "Example",
  "number": "7.13",
  "title": ".",
  "body": " Fix a group , a normal subgroup and a subgroup . Then the function given by for is a homomorphism. Thus acts on via automorphisms.  "
},
{
  "id": "subsec-external-sdps-12",
  "level": "2",
  "url": "sec-spds.html#subsec-external-sdps-12",
  "type": "Example",
  "number": "7.14",
  "title": ".",
  "body": " Let be cyclic of order and be cyclic of order for any . There is an automorphism of that sends to . This automorphism is its own inverse; i.e., it has order . Therefore, by , there is a group homomorphism with . We may thus form the group The elements of are for and , in particular . Set Then  and Looks familar!  Indeed, by the universal mapping property for we have a homomorphism such that and . Moreover, is onto since and since it follows that is a bijection. So the dihedral group is a semidirect product, in which the two component groups are cyclic of orders and respectively: and is the inversion homomorphism as described above.  "
},
{
  "id": "thm-sdp",
  "level": "2",
  "url": "sec-spds.html#thm-sdp",
  "type": "Theorem",
  "number": "7.15",
  "title": "Semidirect Products are Groups.",
  "body": "Semidirect Products are Groups   If and are groups and is a homomorphism, then setting:      is a group     and      .          The proof is straightforward but a bit messy. For associativity, note that On the other hand This gives associativity.  The fact that is a two-sided identity follows from the fact that .  Finally and similarly     Define a funtion as . Then is a homomorphism, since The map is clearly injective and hence its image is isomorphic to . In fact, the image is normal since the second component of is clearly . Let us write this image as   The function defined by is also an injective homomorphism and thus its image is isomorphic to . is typically not normal, however. Finally, it is easy to see that and . Putting this all together we have    ,     ,     , and     .       Consider the projection onto the second factor given by . This is a goup homomorphism since the second component of is and is surjective by definition. Now By the we conclude that .      "
},
{
  "id": "thm-sdp-recognition",
  "level": "2",
  "url": "sec-spds.html#thm-sdp-recognition",
  "type": "Theorem",
  "number": "7.16",
  "title": "Recognition Theorem for Internal Semidirect Products.",
  "body": "Recognition Theorem for Internal Semidirect Products  recognition theorem (for internal semidirect products)   For a group , suppose we are given and so that    ,     ,     , and     .     Let be the permutation representation of the action of on via automorphisms given by in . (This means that for any  , where is the function for all .) Then the function defined by is an isomorphism of groups. Moreover, under this isomorphism, corresponds to and corresponds to (referring to the notation in above).    We have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism. It is obvious that and .   "
},
{
  "id": "def-spd-internal",
  "level": "2",
  "url": "sec-spds.html#def-spd-internal",
  "type": "Definition",
  "number": "7.17",
  "title": "Internal Semidirect Products.",
  "body": "Internal Semidirect Products   In this situation of the , we will say that is the internal semi-direct product of and . internal semidirect product (of groups)    "
},
{
  "id": "subsec-internal-sdps-6",
  "level": "2",
  "url": "sec-spds.html#subsec-internal-sdps-6",
  "type": "Example",
  "number": "7.18",
  "title": ".",
  "body": " Returning to , let and . Then , , and . So, is isomorphic to a semi-direct product, as we already showed.  "
},
{
  "id": "subsec-internal-sdps-7",
  "level": "2",
  "url": "sec-spds.html#subsec-internal-sdps-7",
  "type": "Example",
  "number": "7.19",
  "title": ".",
  "body": " Let , and . Then , , and . It follows that where is cyclic of order and the action sends to conjugation by .  "
},
{
  "id": "subsec-internal-sdps-9",
  "level": "2",
  "url": "sec-spds.html#subsec-internal-sdps-9",
  "type": "Example",
  "number": "7.20",
  "title": ".",
  "body": " Let and again, but this time take (assuming ). Then we get where is cyclic of order and the action sends to conjugation by .  The actions and are not identical. For example, assuming we have and Yet since each is isomorphic to .  On HW 8 you will give a more conceptual reason for why these two semidirect products turned out to be isomorphic: it is because and are conjugate in . More generally, below is a criterion for a two semidirect products to be isomorphic.  "
},
{
  "id": "thm-conjugate-aut",
  "level": "2",
  "url": "sec-spds.html#thm-conjugate-aut",
  "type": "Theorem",
  "number": "7.21",
  "title": "Isomorphisms of Semidirect Products.",
  "body": "Isomorphisms of Semidirect Products   Let be a finite cyclic group and let be an arbitrary group. Suppose that the images of and are conjugate subgroups of . Then .   "
},
{
  "id": "thm-groups-of-order-6",
  "level": "2",
  "url": "sec-spds.html#thm-groups-of-order-6",
  "type": "Theorem",
  "number": "7.22",
  "title": "Groups of Order <span class=\"process-math\">\\(6\\)<\/span>.",
  "body": "Groups of Order   Any group of order is isomorphic either to or to .    Let be a group of order . gives that there exist elements with and . Let and . Since , is a normal subgroup of and since is a common subgroup of and  gives that . Thus and since we deduce that . now gives that is the internal semidirect product of and . More to the point, , where gives the action of on by .  We now analyze the possibilities for . By , . There are two possibilities for the image of : either or .  If , then (which implies ) and . Therefore, in this case , where the last isomorphism uses the .  If , then is the map and by an earlier example for this we have , so .  Finally, because the former is abelian and the latter is not.   "
},
{
  "id": "thm-order-pq",
  "level": "2",
  "url": "sec-spds.html#thm-order-pq",
  "type": "Theorem",
  "number": "7.23",
  "title": "Classification for Groups of Order <span class=\"process-math\">\\(pq\\)<\/span>.",
  "body": "Classification for Groups of Order  classification of groups of order   Let be primes.     If there is a unique group of order up to isomorphism, namely .    If there are exactly two groups of order up to isomorphism, namely and a non-abelian group.       Let be a group of order and let be Sylow subgroups of order and respectively. We see that is a normal subgroup using , since is the smallest prime that divides .  Furthermore, since is a subgroup of both and we have by that , so that . From here it follows that and so . now yields that for some homomorphism , equivalently . By to give such a homomorphism is equivalent to giving an element so that , which will give for . Thus yielding that either or .   Case 1: if then is the trivial homomorphism and thus .   Case 2: if then it must be the case by Lagrange that . By we know that is a cyclic group. Therefore we have that if and only if there exists an element of order by (2). Moreover any such element generates a subgroup of of order . Since there is a unique subgroup of a cyclic group of a given order by (2) we see that the image of is independent of the choice of . Thus by we conclude that all subgroups resulting from any choice of of order are isomorphic.  Moreover, from the explicit presentation of semidirect products of cyclic groups given in a homework problem we see that the resulting group is non-abelian; in particular it is not isomorphic to .   "
},
{
  "id": "sec-spds-5",
  "level": "2",
  "url": "sec-spds.html#sec-spds-5",
  "type": "Summary",
  "number": "7.2",
  "title": "",
  "body": "    are defined using homomorphisms into automorphism groups. See: They are often used to construct non-abelian groups.     are similar to their direct counterparts, though only require that one of or be normal. They can be identified using the .    Using semidirect products, we are able to provide a .    "
},
{
  "id": "sec-ftfgag",
  "level": "1",
  "url": "sec-ftfgag.html",
  "type": "Section",
  "number": "7.3",
  "title": "Finitely Generated Abelian Groups",
  "body": "Finitely Generated Abelian Groups    The classification of the constituents of a chaos, nothing less is here essayed.   Herman Melville   In this section we see that we can classify finitely generated abelian groups into isomorphism classes.  Sunzi's Remainder Theorem   Suppose for distinct primes . Then there is an isomorphism given by where denote the class of an integer in . Sunzi's remainder theorem (for groups)     Using , we let be the unique homomorhism that sends to . Then We see and so . Conversely, if , then for all and since are pairwise relatively prime, it follows that . This proves . The claim follows by the .     Sunzi's Remainder Theorem frequently goes by the name of The Chinese Remainder Theorem, but it has been remarked that this is somewhat like referencing the Pythagorean Theorem as The Greek Triangle Theorem or Fermat's Little Theorem as The French Power Postulate. In the interest of giving credit where credit is due, we include it here with the name of the 3rd-century Chinese mathematician, Sunzi, to whom the result is often attributed. Chinese Remainder Theorem    The following is the classification theorem for finitely generated abelian groups. We present it without proving it for now. The full proof will be given in the spring semester.  Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG)  fundamental theorem of finitely generated abelian groups (FTFGAG)   Let be a finitely generated abelian group. Then is a direct product of cyclic groups. More precisely   There exist , prime integers and positive integers such that: where for all .    For each index , there is a partition with each , such that , thus overall we have     The 's, 's and 's are uniquely determined by .    equivalently, there exist , and for all , satisfying for all so that .    The integers are uniquely determined by .       It suffices prove that for a given group , we can recover its invariant factor form from its elementary divisor form, and vice versa. We will be a bit hand-wavey for this following the ideas from the above examples. by applying we have where is the product of the elementary divisors of highest power for each distinct prime in the list , is the product of the next highest possible prime powers, and so on. We will have that and in general that since by definition the exponent of is greater or equal to the exponent of .  Conversely, given with , we may apply to each to find its elementary divisor form.    FTFGAG in Action  For we have , .   Rank, Invariant Factors, Elementary Divisors   In , the number is the rank of , the are the elementary divisors of , and the decomposition of in parts (1-2) is called the elementary divisor decomposition of . elementary divisors (of a group)  elementary divisor form (of a group) The decomposition in part (1) is also called a primary decomposition . primary decomposition (of a group)   In , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of . invariant factors (of a group)  invariant factor form (of a group)     Elementary Divisor Form to Invariant Factor Form  Say I tell you  gives and so that Since , this is in invariant factor form, and hence the rank of is and the invariant factors of are and .   Invariant Factor Form to Elementary Divisor Form  Suppose now I tell you Then by  given the elementary divisor form.   The makes classification of finite abelian groups a very quick matter.  Abelian Groups of Order  We classify the abelian groups of order up to isomorphism.  Let be an abelian group of order . Since is finite the rank of is . Let's determine the possible elementary divisors so that The above equation gives and the possibilities for factoring as a product of prime powers are or which gives   Note that the two groups above are not isomorphic. To see this, note that there is an element of order in , namely whereas every element has order since and .  Alternatively we could argue that the uniqueness of the tells us that uniquely determines the elementary divisors, so two groups with distinct elementary divisors cannot be isomorphic.       allows us to decompose cyclic groups into direct products of their prime factors.    If is an abelian , then it is isomorphic to a direct product of cyclic groups. This is known as the .    The has two forms, each using either invariant factors or elementary divisors of a group, though it is possible to move from one to the other. See: and .      "
},
{
  "id": "thm-sunzi",
  "level": "2",
  "url": "sec-ftfgag.html#thm-sunzi",
  "type": "Theorem",
  "number": "7.24",
  "title": "Sunzi’s Remainder Theorem.",
  "body": "Sunzi's Remainder Theorem   Suppose for distinct primes . Then there is an isomorphism given by where denote the class of an integer in . Sunzi's remainder theorem (for groups)     Using , we let be the unique homomorhism that sends to . Then We see and so . Conversely, if , then for all and since are pairwise relatively prime, it follows that . This proves . The claim follows by the .   "
},
{
  "id": "sec-ftfgag-5",
  "level": "2",
  "url": "sec-ftfgag.html#sec-ftfgag-5",
  "type": "Remark",
  "number": "7.25",
  "title": "",
  "body": " Sunzi's Remainder Theorem frequently goes by the name of The Chinese Remainder Theorem, but it has been remarked that this is somewhat like referencing the Pythagorean Theorem as The Greek Triangle Theorem or Fermat's Little Theorem as The French Power Postulate. In the interest of giving credit where credit is due, we include it here with the name of the 3rd-century Chinese mathematician, Sunzi, to whom the result is often attributed. Chinese Remainder Theorem   "
},
{
  "id": "thm-ftfgag",
  "level": "2",
  "url": "sec-ftfgag.html#thm-ftfgag",
  "type": "Theorem",
  "number": "7.26",
  "title": "Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG).",
  "body": "Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG)  fundamental theorem of finitely generated abelian groups (FTFGAG)   Let be a finitely generated abelian group. Then is a direct product of cyclic groups. More precisely   There exist , prime integers and positive integers such that: where for all .    For each index , there is a partition with each , such that , thus overall we have     The 's, 's and 's are uniquely determined by .    equivalently, there exist , and for all , satisfying for all so that .    The integers are uniquely determined by .       It suffices prove that for a given group , we can recover its invariant factor form from its elementary divisor form, and vice versa. We will be a bit hand-wavey for this following the ideas from the above examples. by applying we have where is the product of the elementary divisors of highest power for each distinct prime in the list , is the product of the next highest possible prime powers, and so on. We will have that and in general that since by definition the exponent of is greater or equal to the exponent of .  Conversely, given with , we may apply to each to find its elementary divisor form.   "
},
{
  "id": "sec-ftfgag-8",
  "level": "2",
  "url": "sec-ftfgag.html#sec-ftfgag-8",
  "type": "Example",
  "number": "7.27",
  "title": "FTFGAG in Action.",
  "body": "FTFGAG in Action  For we have , .  "
},
{
  "id": "def-eds-and-ifs",
  "level": "2",
  "url": "sec-ftfgag.html#def-eds-and-ifs",
  "type": "Definition",
  "number": "7.28",
  "title": "Rank, Invariant Factors, Elementary Divisors.",
  "body": "Rank, Invariant Factors, Elementary Divisors   In , the number is the rank of , the are the elementary divisors of , and the decomposition of in parts (1-2) is called the elementary divisor decomposition of . elementary divisors (of a group)  elementary divisor form (of a group) The decomposition in part (1) is also called a primary decomposition . primary decomposition (of a group)   In , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of . invariant factors (of a group)  invariant factor form (of a group)    "
},
{
  "id": "ex-if-to-ed",
  "level": "2",
  "url": "sec-ftfgag.html#ex-if-to-ed",
  "type": "Example",
  "number": "7.29",
  "title": "Elementary Divisor Form to Invariant Factor Form.",
  "body": "Elementary Divisor Form to Invariant Factor Form  Say I tell you  gives and so that Since , this is in invariant factor form, and hence the rank of is and the invariant factors of are and .  "
},
{
  "id": "ex-ed-to-if",
  "level": "2",
  "url": "sec-ftfgag.html#ex-ed-to-if",
  "type": "Example",
  "number": "7.30",
  "title": "Invariant Factor Form to Elementary Divisor Form.",
  "body": "Invariant Factor Form to Elementary Divisor Form  Suppose now I tell you Then by  given the elementary divisor form.  "
},
{
  "id": "sec-ftfgag-13",
  "level": "2",
  "url": "sec-ftfgag.html#sec-ftfgag-13",
  "type": "Example",
  "number": "7.31",
  "title": "Abelian Groups of Order <span class=\"process-math\">\\(75\\)<\/span>.",
  "body": "Abelian Groups of Order  We classify the abelian groups of order up to isomorphism.  Let be an abelian group of order . Since is finite the rank of is . Let's determine the possible elementary divisors so that The above equation gives and the possibilities for factoring as a product of prime powers are or which gives   Note that the two groups above are not isomorphic. To see this, note that there is an element of order in , namely whereas every element has order since and .  Alternatively we could argue that the uniqueness of the tells us that uniquely determines the elementary divisors, so two groups with distinct elementary divisors cannot be isomorphic.  "
},
{
  "id": "sec-ftfgag-14",
  "level": "2",
  "url": "sec-ftfgag.html#sec-ftfgag-14",
  "type": "Summary",
  "number": "7.3",
  "title": "",
  "body": "    allows us to decompose cyclic groups into direct products of their prime factors.    If is an abelian , then it is isomorphic to a direct product of cyclic groups. This is known as the .    The has two forms, each using either invariant factors or elementary divisors of a group, though it is possible to move from one to the other. See: and .     "
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
