+++
date = "2022-06-07T15:44:10-04:00"
draft = false
title = "Functors and Duality"
categories = [ "Math" ]
ShowToc = true
tags = [ "Category Theory" ]
+++
## Functors as structure-preserving maps between categories

A category is a kind of algebraic object: it has objects, morphisms, identities, and a partially defined composition law satisfying axioms. A functor is the appropriate notion of homomorphism between such objects.

> [!info] Covariant functor
> Let $\mathcal{C},\mathcal{D}$ be categories. A **(covariant) functor** $F:\mathcal{C}\to \mathcal{D}$ consists of:
> - for each object $X\in \mathcal{C}$, an object $F(X)\in \mathcal{D}$;
> - for each morphism $f:X\to Y$ in $\mathcal{C}$, a morphism $F(f):F(X)\to F(Y)$ in $\mathcal{D}$.
> 
> This datum satisfies
> - $F(\mathrm{id}_X)=\mathrm{id}_{F(X)}$ for every object $X$;
> - $F(g\circ f)=F(g)\circ F(f)$ whenever $f$ and $g$ are composable.

> [!danger] Functors preserve commutative diagrams
> Any equality of morphisms built from identities and composition is preserved by a functor. Concretely, if two paths in a diagram in $\mathcal{C}$ have the same composite, then applying $F$ yields two paths in $\mathcal{D}$ with the same composite. This is the basic mechanism behind “transporting structure” across categories.

> [!info] Identity functor, composition, and endofunctors
> For any category $\mathcal{C}$, the **identity functor** $\mathrm{Id}_{\mathcal{C}}:\mathcal{C}\to\mathcal{C}$ sends objects and morphisms to themselves. If $F:\mathcal{C}\to\mathcal{D}$ and $G:\mathcal{D}\to\mathcal{E}$ are functors, their composite $G\circ F:\mathcal{C}\to\mathcal{E}$ is defined in the evident way on objects and morphisms and is again a functor. A functor $T:\mathcal{C}\to\mathcal{C}$ is called an **endofunctor** on $\mathcal{C}$.

> [!abstract] Categories of categories
> Small categories and functors form a category: objects are small categories, morphisms are functors, identities are identity functors, and composition is composition of functors.

> [!success] Proof
> Associativity and unit laws follow from associativity and unit laws of function composition on both objects and morphisms.

## Opposite categories and contravariant functors

Contravariance is not a second notion; it is covariant functoriality after reversing arrows.

> [!info] Opposite category
> Let $\mathcal{C}$ be a category. The **opposite category** $\mathcal{C}^{\mathrm{op}}$ is defined by:
> 1. $\mathrm{Ob}(\mathcal{C}^{\mathrm{op}})=\mathrm{Ob}(\mathcal{C})$;
> 2. for objects $X,Y$, $\mathcal{C}^{\mathrm{op}}(X,Y):=\mathcal{C}(Y,X)$;
> 3. composition in $\mathcal{C}^{\mathrm{op}}$ is defined by reversing the order of composition in $\mathcal{C}$: if $f:X\to Y$ in $\mathcal{C}^{\mathrm{op}}$ (i.e. $f:Y\to X$ in $\mathcal{C}$) and $g:Y\to Z$ in $\mathcal{C}^{\mathrm{op}}$ (i.e. $g:Z\to Y$ in $\mathcal{C}$), then
> $$g\circ_{\mathcal{C}^{\mathrm{op}}} f := f\circ_{\mathcal{C}} g \in \mathcal{C}(Z,X)=\mathcal{C}^{\mathrm{op}}(X,Z).$$

> [!note] Double opposite
> There is a canonical equality $(\mathcal{C}^{\mathrm{op}})^{\mathrm{op}}=\mathcal{C}$ (same objects, same hom-sets, same compositions).

> [!success] Proof
> Unwinding definitions shows that reversing arrows twice returns the original direction and original composition law.

> [!info] Contravariant functor
> A **contravariant functor** $F:\mathcal{C}\to\mathcal{D}$ is a functor
> $$F:\mathcal{C}^{\mathrm{op}}\longrightarrow \mathcal{D}.$$
> Equivalently, it assigns to each object $X$ an object $F(X)$, and to each morphism $f:X\to Y$ in $\mathcal{C}$ a morphism
> $$F(f):F(Y)\longrightarrow F(X)$$
> in $\mathcal{D}$, such that $F(\mathrm{id}_X)=\mathrm{id}_{F(X)}$ and $F(g\circ f)=F(f)\circ F(g)$.

> [!danger] Where contravariance comes from
> Many constructions are functorial by **precomposition**. If a morphism $f:X\to Y$ changes the input of some gadget, then the gadget typically transforms in the reverse direction. This is the conceptual source of pullbacks, inverse images, and duals throughout mathematics.

## The duality principle

Reversing arrows turns definitions and theorems into new ones. This is not an analogy; it is a formal machine.

> [!abstract] Duality principle
> Any categorical statement that can be expressed purely in terms of objects, morphisms, identities, composition, and equality of composites has a **dual statement** obtained by reversing the direction of every morphism. Moreover, the original statement holds in a category $\mathcal{C}$ if and only if its dual holds in $\mathcal{C}^{\mathrm{op}}$.

> [!success] Proof
> The axioms of a category are self-dual: in $\mathcal{C}^{\mathrm{op}}$, associativity and unit laws follow formally from those in $\mathcal{C}$. Thus any derivation from the axioms dualizes by systematically reversing arrows and swapping the order of composition.

> [!example] Self-dual notions
> The definition of isomorphism is self-dual: a morphism is an isomorphism in $\mathcal{C}$ if and only if it is an isomorphism in $\mathcal{C}^{\mathrm{op}}$. Similarly, the notion of “commutative diagram” is self-dual.

> [!info] Opposite functor
> Given a functor $F:\mathcal{C}\to\mathcal{D}$, its **opposite** is the functor
> $$F^{\mathrm{op}}:\mathcal{C}^{\mathrm{op}}\longrightarrow \mathcal{D}^{\mathrm{op}}$$
> defined by $F^{\mathrm{op}}(X)=F(X)$ on objects and $F^{\mathrm{op}}(f)=F(f)$ on morphisms (viewed in the opposite hom-sets).

> [!note] Double opposite for functors
> $(F^{\mathrm{op}})^{\mathrm{op}}=F$.

> [!success] Proof
> Immediate from the definition.

## Basic functorial constructions and examples

> [!example] Elementary functors
> 1. **Constant functors.** Fix an object $D\in \mathcal{D}$. The constant functor $\Delta_D:\mathcal{C}\to\mathcal{D}$ sends every object of $\mathcal{C}$ to $D$ and every morphism to $\mathrm{id}_D$.
> 2. **Inclusion functors.** If $\mathcal{A}$ is a subcategory of $\mathcal{C}$ (with the same composition law), there is an inclusion functor $i:\mathcal{A}\hookrightarrow \mathcal{C}$.
> 3. **From preorders.** If $\mathcal{P}$ and $\mathcal{Q}$ arise from preorders $(P,\le)$ and $(Q,\preceq)$, then a functor $\mathcal{P}\to\mathcal{Q}$ is exactly a monotone map $P\to Q$. A contravariant functor $\mathcal{P}\to\mathcal{Q}$ is exactly an order-reversing map.

> [!abstract] Functors preserve isomorphisms
> Let $F:\mathcal{C}\to\mathcal{D}$ be a functor. If $f:X\to Y$ is an isomorphism in $\mathcal{C}$, then $F(f):F(X)\to F(Y)$ is an isomorphism in $\mathcal{D}$, with inverse $F(f^{-1})$.

> [!success] Proof
> If $f^{-1}$ satisfies $f^{-1}\circ f=\mathrm{id}_X$ and $f\circ f^{-1}=\mathrm{id}_Y$, then
> $$F(f^{-1})\circ F(f)=F(f^{-1}\circ f)=F(\mathrm{id}_X)=\mathrm{id}_{F(X)},$$
> $$F(f)\circ F(f^{-1})=F(f\circ f^{-1})=F(\mathrm{id}_Y)=\mathrm{id}_{F(Y)}.$$

## Functoriality by forgetting and by freely adding structure

Many familiar maps between mathematical universes are functors because they forget or remember exactly the right amount of structure.

> [!example] Forgetful functors
> 1. The underlying-set assignment gives functors
> $$U:\mathbf{Grp}\to \mathbf{Set},\qquad U:\mathbf{Ring}\to \mathbf{Set},\qquad U:R\mathbf{-Mod}\to \mathbf{Set},$$
> sending a homomorphism to the same function of underlying sets.
> 2. There is a functor $U:\mathbf{Top}\to \mathbf{Set}$ forgetting the topology.
> 3. More generally, whenever objects are sets equipped with extra structure and morphisms are structure-preserving functions, the assignment “forget the extra structure” is functorial by definition.

> [!danger] A preview of free constructions
> In many algebraic contexts, forgetting structure has a systematic “inverse direction”: given a set $S$, one can **freely** generate a structured object on $S$ (free group, free module, free algebra, $\dots$). These free constructions are characterized by universal mapping properties: maps out of the free object correspond to ordinary functions out of $S$ that ignore the extra structure. We will later package this phenomenon into a general formalism.

## Contravariant examples: inverse image and duality by precomposition

> [!example] Power set and inverse image
> Define $\mathcal{P}:\mathbf{Set}^{\mathrm{op}}\to \mathbf{Set}$ by sending a set $X$ to its power set $\mathcal{P}(X)$, and a function $f:X\to Y$ to the inverse image map
> $$f^{-1}:\mathcal{P}(Y)\longrightarrow \mathcal{P}(X),\qquad B\longmapsto f^{-1}(B).$$
> Then $\mathcal{P}$ is a contravariant functor, since $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$ and $\mathrm{id}^{-1}=\mathrm{id}$.

> [!example] Pullback of functions as contravariance
> Fix a set $A$. Define $H_A:\mathbf{Set}^{\mathrm{op}}\to \mathbf{Set}$ by
> $$H_A(X)=\mathbf{Set}(X,A),\qquad H_A(f:X\to Y)(\varphi:Y\to A)=\varphi\circ f:X\to A.$$
> This is contravariant functoriality by precomposition.

> [!example] Open sets and inverse image
> For a topological space $X$, let $\mathsf{Open}(X)$ be the collection of open subsets of $X$, ordered by inclusion, viewed as a thin category. A continuous map $f:X\to Y$ induces an order-preserving map
> $$f^{-1}:\mathsf{Open}(Y)\longrightarrow \mathsf{Open}(X),$$
> hence a functor $\mathsf{Open}(Y)\to \mathsf{Open}(X)$. Equivalently, $\mathsf{Open}(-)$ is a contravariant functor $\mathbf{Top}\to \mathbf{Cat}$ once we regard each $\mathsf{Open}(X)$ as a category.

> [!example] Dual vector spaces
> Fix a field $k$. The assignment $V\mapsto V^\vee:=\mathbf{Vect}_k(V,k)$ extends to a contravariant functor
> $$(-)^\vee:\mathbf{Vect}_k^{\mathrm{op}}\to \mathbf{Vect}_k,\qquad f:V\to W \longmapsto f^\vee:W^\vee\to V^\vee,\ \ \phi\mapsto \phi\circ f.$$
> Here contravariance again comes from precomposition.
