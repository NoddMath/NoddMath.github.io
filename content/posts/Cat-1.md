+++
date = "2022-06-05T15:44:10-04:00"
draft = false
title = "Categories and Morphisms: The Ambient Language"
categories = [ "Math" ]
ShowToc = true
tags = [ "Category Theory" ]
+++
## Why morphisms come first

Category theory packages a recurring mathematical pattern:

> [!Important] 
> Objects are best understood through the maps into and out of them.

Across algebra, geometry, topology, and logic, we routinely organize a class of structured objects together with structure-preserving maps, and then study constructions that are invariant under the appropriate notion of sameness. In this setting, equality of objects is usually too rigid, while isomorphism captures the intended identification.

Two guiding principles will silently shape the rest of these notes:

1. **Invariance under isomorphism.** Most meaningful constructions and statements should depend only on the isomorphism class of an object.
2. **Diagrammatic reasoning.** Many arguments are most naturally expressed as the commutativity of diagrams, i.e. as equalities of composites.

Even at the most elementary level, thinking “by maps” already clarifies familiar notions. For example, an element $a\in A$ of a set $A$ can be represented as a function $\{*\}\to A$ picking out $a$. This is a preview of a general theme: in many contexts, “elements” of an object are better treated as **morphisms from a test object**.
## Definition and basic notation

> [!info] Category
> A **category** $\mathcal{C}$ consists of:
> - a class of objects $\mathrm{Ob}(\mathcal{C})$;
> - for each pair $X,Y\in \mathrm{Ob}(\mathcal{C})$, a collection of morphisms $$\mathrm{Hom}_{\mathcal{C}}(X,Y)\quad (\text{also written } \mathcal{C}(X,Y));$$
> - for each triple $X,Y,Z$, a composition operation $$\circ:\mathcal{C}(Y,Z)\times \mathcal{C}(X,Y)\longrightarrow \mathcal{C}(X,Z),\quad (g,f)\longmapsto g\circ f;$$
> - for each object $X$, an identity morphism $\mathrm{id}_X\in \mathcal{C}(X,X)$.
> 
> This datum satisfies
> - $h\circ (g\circ f)=(h\circ g)\circ f$ whenever $f,g,h$ are composable;
> - $\mathrm{id}_Y\circ f=f$ and $f\circ \mathrm{id}_X=f$ for every $f:X\to Y$.

> [!important] Notation
> A morphism $f\in \mathcal{C}(X,Y)$ is written $f:X\to Y$. We call $X$ the **domain** (or source) and $Y$ the **codomain** (or target). If $f:X\to Y$ and $g:Y\to Z$, we say $f$ and $g$ are **composable** and write $g\circ f:X\to Z$.

> [!info] Endomorphisms and automorphisms
> An **endomorphism** of $X$ is a morphism $f:X\to X$, i.e. an element of $\mathcal{C}(X,X)$. An **automorphism** of $X$ is an invertible endomorphism of $X$. We write
> $$\mathrm{End}_{\mathcal{C}}(X):=\mathcal{C}(X,X),\qquad \mathrm{Aut}_{\mathcal{C}}(X):=\{\,f\in \mathcal{C}(X,X)\mid f \text{ is invertible}\,\}.$$

> [!danger] Diagrams and commutativity
> A diagram in $\mathcal{C}$ is a picture of objects and morphisms. To say a diagram **commutes** means that any two directed paths with the same start and end yield the same composite. For example, the triangle
> {{< figure align=center src="/images/Commutative_Diagram.svg" width="210" >}}
> commutes precisely when $g\circ f=h$. This is not merely notation: commutative diagrams are the natural syntax of categorical statements.

## Isomorphisms and the core groupoid

> [!info] Isomorphism
> A morphism $f:X\to Y$ in $\mathcal{C}$ is an **isomorphism** if there exists a morphism $g:Y\to X$ such that
> $$g\circ f=\mathrm{id}_X,\qquad f\circ g=\mathrm{id}_Y.$$
> In this case $g$ is unique and is denoted $f^{-1}$, and we write $X\simeq Y$.

> [!note] Basic calculus of isomorphisms
> 1. If $f:X\to Y$ is an isomorphism, then its inverse $f^{-1}:Y\to X$ is unique.
> 2. The identity $\mathrm{id}_X$ is an isomorphism for every $X$.
> 3. If $f:X\to Y$ and $g:Y\to Z$ are isomorphisms, then $g\circ f:X\to Z$ is an isomorphism and
>    $$ (g\circ f)^{-1}=f^{-1}\circ g^{-1}. $$

> [!success] Proof
> (1) If $g,g':Y\to X$ are both inverses, then
> $$g=g\circ \mathrm{id}_Y=g\circ (f\circ g')=(g\circ f)\circ g'=\mathrm{id}_X\circ g'=g'.$$
> (2) and (3) are immediate from the unit laws and associativity.

> [!abstract] Automorphisms form a group
> For each object $X$, the set $\mathrm{Aut}_{\mathcal{C}}(X)$ is a group under composition, with identity $\mathrm{id}_X$ and inverse given by $f\mapsto f^{-1}$.

> [!success] Proof
> Closure and associativity follow from the previous lemma and associativity of composition. The unit and inverse axioms are built into the definition of isomorphism.

> [!info] Groupoid and core
> A **groupoid** is a category in which every morphism is an isomorphism. Given any category $\mathcal{C}$, its **core** (or maximal subgroupoid) $\mathrm{Core}(\mathcal{C})$ is the subcategory with the same objects as $\mathcal{C}$ and whose morphisms are precisely the isomorphisms in $\mathcal{C}$.

> [!danger] Remark
> The slogan “unique up to unique isomorphism” is often best understood as a statement living in the core. Many constructions will not single out a distinguished object, but will single out its isomorphism class in a canonical way.

## A working list of examples

The following examples are not decoration: they are the test cases that keep the abstract definitions honest.

> [!example] Structured objects and structure-preserving maps
> 1. $\mathbf{Set}$: objects are sets, morphisms are functions, composition is composition of functions.
> 2. $\mathbf{Grp}$ and $\mathbf{Ab}$: objects are (abelian) groups, morphisms are homomorphisms.
> 3. $\mathbf{Ring}$: objects are (unital) rings, morphisms are unital ring homomorphisms.
> 4. $R\mathbf{-Mod}$: objects are left $R$-modules, morphisms are $R$-linear maps.
> 5. $\mathbf{Vect}_k$: objects are vector spaces over a field $k$, morphisms are linear maps.
> 6. $\mathbf{Top}$: objects are topological spaces, morphisms are continuous maps.

> [!example] A thin category from a preorder
> Let $(P,\le)$ be a preorder. Define a category $\mathcal{P}$ whose objects are elements of $P$, and with
> $$\mathcal{P}(x,y)=\begin{cases} \{*\} & x\leq y,\\ \varnothing & \text{otherwise}. \end{cases}$$
> Composition is forced by transitivity, and identities by reflexivity. Such categories are called **thin**: between any two objects there is at most one morphism.

> [!example] The category of relations
> Define a category $\mathbf{Rel}$ as follows: objects are sets, and a morphism $R:X\to Y$ is a relation $R\subseteq X\times Y$. Given $R:X\to Y$ and $S:Y\to Z$, define the composite $S\circ R:X\to Z$ by
> $$ (x,z)\in S\circ R \iff \exists\,y\in Y \text{ such that } (x,y)\in R \text{ and } (y,z)\in S. $$
> Identities are the diagonal relations $\Delta_X\subseteq X\times X$. This example is useful because morphisms need not be functions.

> [!example] A one-object category from a monoid
> Given a monoid $(M,\cdot,1)$, form a category $\mathcal{B}M$ with a single object $\ast$ and
> $$\mathcal{B}M(\ast,\ast)=M,$$
> with composition given by multiplication and identity given by $1$. If $M$ is a group, $\mathcal{B}M$ is a groupoid with one object.

> [!example] Matrices as morphisms
> Fix a ring $R$. Define a category $\mathbf{Mat}_R$ whose objects are natural numbers $n\in \mathbb{N}$, and whose morphisms $m\to n$ are $n\times m$ matrices with entries in $R$. Composition is matrix multiplication, and $\mathrm{id}_n$ is the $n\times n$ identity matrix. This is a concrete model for the idea that “morphisms can encode processes,” not just maps of sets.

> [!example] Open sets ordered by inclusion
> For a topological space $X$, let $\mathsf{Open}(X)$ be the preorder of open subsets ordered by inclusion. By the preorder construction, this yields a thin category. This example will later serve as a canonical source of indexing categories for gluing constructions, even before any additional structure is introduced.

## Smallness conventions: enough to proceed

In many mathematical contexts, collections of objects or morphisms form proper classes rather than sets. This is not a problem as long as we are clear about what we need.

> [!info] Small and locally small
> A category $\mathcal{C}$ is **small** if $\mathrm{Ob}(\mathcal{C})$ is a set and all morphisms together form a set. It is **locally small** if for every $X,Y$, the hom-collection $\mathcal{C}(X,Y)$ is a set.

> [!danger] Why local smallness is the default
> Most constructions in the core development require us to treat hom-collections as genuine sets (e.g. to form sets of natural transformations, or to speak of “elements” of a hom-set). Thus, local smallness is the minimal standing assumption that keeps the basic language usable.

> [!danger] Large categories and universes
> Categories such as $\mathbf{Set}$, $\mathbf{Grp}$, and $\mathbf{Top}$ are typically not small. One standard way to keep foundations tidy is to fix an ambient set-theoretic universe and only consider sets and categories that are “small” relative to it. We will invoke such a convention only when a statement genuinely depends on size; otherwise we treat these issues as background.
