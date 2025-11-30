+++
date = '2023-03-23T15:44:10-04:00'
draft = true
title = 'Countability Axioms and More'
categories = 'Math'
+++

Compactness can be viewed as a kind of finiteness, which allows us to deduce global properties of a topological space from local ones. But what happens when we move to the infinite case? General infinite objects can be difficult to handle, but countable infinity is often more tractable. This leads us to our topic: the countability axioms.
## Definitions

In the narrow sense, the countability axioms refer to two definitions related to bases. In a broader sense, they include a wider collection of definitions related to countability.

> [!info] First-countable space
> A topological space is **first-countable** if it has a countable neighborhood basis.

> [!info] Second-countable space
> A topological space is **second-countable** if it has a countable basis.

> [!info] Separable space
> A topological space is **separable** if it has a countable dense subset.

> [!info] Lindelöf space
> A topological space is **Lindelöf** if every open cover admits a countable subcover.
## Relationship between the countability axioms

> [!abstract] 
> Every second-countable space is first-countable, separable, and Lindelöf.
> > [!success] Proof
> > Let $X$ be a topological space and $\{B_i\}_{i\in\Bbb N}$ a countable basis for $X$.

Fix $x\in X$. The collection $\mathcal B_x=\{B_i:x\in B_i\}$ is countable (being a subcollection of a countable set) and is a neighborhood basis at $x$: every open $U\ni x$ contains some basis element $B_i\ni x$, so $B_i\subset U$.  Hence $X$ is first-countable.

For each $i$, if $B_i\neq \emptyset$ choose a point $x_i\in B_i$.  Then the set
$$
D=\{x_i:B_i\neq\varnothing\}
$$
is countable, and given any nonempty open $U$ there is some $B_j\subset U$, so $x_j\in U\cap D$.  Thus $D$ is dense and $X$ is separable.

Let $\{U_\alpha\}_{\alpha\in A}$ be any open cover of $X$.  Each basis element $B_i$ lies in some $U_{\alpha(i)}$. Then $\{U_{\alpha(i)}:i\in \mathbb{N}\}$ is a countable subcover: every $x\in X$ lies in some basis $B_i$, hence in the corresponding $U_{\alpha(i)}$. Therefore $X$ is Lindelöf.

## Countability axioms in metric spaces

> [!abstract] First and second countability of metric spaces
> 1. Every metric space is first-countable.
> 2. Every totally bounded metric space is second-countable.
> > [!success] Proof
> > 1. 
> > 2. 

> [!abstract] Equivalence of countability axioms in metric spaces
> For a metric space $(X,d)$, the following statements are equivalent:
> 
> $(a)$ $X$ is second-countable.
> 
> $(b)$ $X$ is separable.
> 
> $(c)$ $X$ is Lindelöf.

