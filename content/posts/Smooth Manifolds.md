+++
date = "2023-12-19T15:44:10-04:00"
draft = false
title = "Smooth Manifolds: Basics"
categories = "Math"
ShowToc = true
tags = [ "Differential Geometry", "Basics" ]
+++

Nowadays, manifolds serve as the gateway to many advanced topics and should no longer be viewed as an elite concept. As long as one has taken a course in analysis and point-set topology, it is possible to begin exploring manifolds.
## From topological spaces to topological manifolds

The most important feature of a manifold is that it locally resembles Euclidean space. This property allows it to unify many seemingly unrelated geometric structures under a common framework.

> [!info] Locally Euclidean space
> A topological space $X$ is called **locally Euclidean** of dimension $n$ if every point $p\in X$ has an open neighborhood $U\subseteq X$ that is homeomorphic to an open subset of $\mathbb{R}^n$. 

To rule out certain pathological cases, additional conditions such as separability and countability are often imposed. This leads to the following standard definition of a topological manifold.

> [!info] Topological manifold
> An $n$-dimensional **topological manifold** is a topological space that is Hausdorff, second-countable, and locally Euclidean of dimension $n$.

> [!info] Chart
> A **chart** on a topological manifold $M$ is a pair $(U,\varphi)$, where $U\subset M$ is an open set and $\varphi:U\to V$ is a homeomorphism onto an open set $V\subset \mathbb{R}^n$. The map $\varphi$ is called a **parameterization** or a **coordinate map**.

> [!info] Atlas
> An **atlas** on a topological manifold $M$ is a collection of charts $\{(U_\alpha, \varphi_\alpha)\}$ such that $\{U_\alpha\}$ is an open cover of $M$.

> [!info] Transition map
> Given a topological manifold $M$, let $(U_\alpha,\varphi_\alpha)$ and $(U_\beta,\varphi_\beta)$ be two charts on $M$ with $U_\alpha\cap U_\beta\neq \emptyset$. The **transition map** from $\varphi_\alpha$ to $\varphi_\beta$ is the composition $$\varphi_\beta \circ \varphi_\alpha^{-1}:\varphi_\alpha(U_\alpha\cap U_\beta)\to \varphi_\beta(U_\alpha \cap U_\beta).$$
## Basic properties of topological manifolds

> [!abstract] Local compactness of topological manifolds
> Every topological manifold is locally compact.
> > [!success] Proof
> > Let $M$ be an $n$-dimensional topological manifold. By definition, for each $x\in M$, there is an open neighborhood $U\subset M$ of $x$ and a homeomorphism $\varphi:U\to V$, where $V\subseteq \mathbb{R}^n$ is open.

Since $\mathbb{R}^n$ is locally compact, at the point $\varphi(x)\in V$, we can choose an open ball $B=B_\varepsilon(\varphi(x))$ with $\overline{B}\subset V$ compact in $\mathbb{R}^n$. Now set
$$W=\varphi^{-1}(B).$$

Then:
1. $W$ is open in $M$ (being the preimage of an open set),
2. $x\in W$,
3. $\overline{W}_M = \varphi^{-1}\bigl(\overline{B}\bigr)$ is compact, since $\varphi^{-1}$ is continuous and $\overline{B}$ is compact.

Thus $x$ has an open neighborhood $W$ whose closure in $M$ is compact. Since $x$ was arbitrary, $M$ is locally compact.

> [!abstract] Paracompactness of topological manifolds
> Every topological manifold is paracompact.
> > [!success] Proof
> > Let $M$ be an $n$-dimensional topological manifold. Since $M$ is Hausdorff and locally compact, it is regular. By the Urysohn metrization theorem, every second-countable, regular, Hausdorff space is metrizable, so $M$ is metrizable. Also, it is a standard fact that every metric space is paracompact. Hence, we conclude that every topological manifold is paracompact.
## Smoothness

> [!info] $C^k$ function
> A function $f:\mathbb{R}^n\to \mathbb{R}^m$ is of class **$C^k$** if all its partial derivatives up to order $k$ exist and are continuous.

> [!info] Smooth function
> A function $f:\mathbb{R}^n\to \mathbb{R}^m$ is called **smooth** if it is of class $C^\infty$.

> [!info] Smooth structure
> A **smooth structure** on a topological manifold $M$ is a maximal atlas $\mathcal{A}=\{(U_\alpha,\varphi_\alpha)\}$ such that for any two charts $(U_\alpha, \varphi_\alpha)$ and $(U_\beta,\varphi_\beta)$ in $\mathcal{A}$ with $U_\alpha\cap U_\beta\neq \emptyset$, the transition map from $\varphi_\alpha$ to $\varphi_\beta$ is smooth.

> [!info] Smooth manifold
> A smooth manifold is a topological manifold equipped with a smooth structure.

> [!info] Diffeomorphism
> A **diffeomorphism** between smooth manifolds $M$ and $N$ is a smooth bijection $f:M\to N$ with a smooth inverse $f^{-1}$.

