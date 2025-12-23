+++
date = "2024-10-19T15:44:10-04:00"
draft = false
title = "Symplectic Manifolds and Symplectomorphisms"
categories = [ "Math" ]
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

The goal of this section is to pass from the linear theory of lecture 1 to a global setting.
A symplectic form on a manifold is, pointwise, a symplectic bilinear form on each tangent space, but with two crucial additional features: **smoothness** and **closedness**.
These two requirements interact in subtle ways and are ultimately responsible for the global nature of symplectic geometry.

## Two-Forms and Nondegeneracy

Let $M$ be a smooth manifold. We write $\Omega^k(M)$ for the space of smooth $k$-forms on $M$.

> [!info] Two-Form
> A **$2$-form** on $M$ is a smooth section $\omega\in \Omega^2(M)$, i.e., a smooth assignment $p\mapsto \omega_p$ where each $\omega_p:T_pM\times T_pM\to \mathbb{R}$ is bilinear and skew-symmetric.

We will constantly use contraction and pullbacks.

> [!important] Contraction and Pullback Notation
> If $X$ is a smooth vector field on $M$ and $\alpha\in \Omega^k(M)$, then $\iota_X\alpha\in \Omega^{k-1}(M)$
> denotes contraction of $\alpha$ with $X$ in the first slot.
> If $\varphi:M\to N$ is smooth and $\beta\in \Omega^k(N)$, then $\varphi^*\beta\in \Omega^k(M)$ denotes the pullback.

> [!danger] Remark
> For a $2$-form $\omega$, the $1$-form $\iota_X\omega$ is characterized by
> $$ (\iota_X\omega)(Y)=\omega(X,Y). $$
> This is the pointwise "$\omega$-lowering" operation which will become fundamental below.

> [!info] Nondegenerate Two-Form
> A $2$-form $\omega\in \Omega^2(M)$ is **nondegenerate** if for every $p\in M$, the bilinear form $\omega_p$ on $T_pM$ is nondegenerate, i.e., if
> $$ \omega_p(v,\cdot)=0\implies v=0. $$

Nondegeneracy is a pointwise linear condition, so it can be checked in local coordinates.
Let $(U; x^1,\dots,x^m)$ be a coordinate chart and write
$$\omega=\frac{1}{2}\sum_{i,j}\omega_{ij}\,dx^i\wedge dx^j,\quad \omega_{ij}=-\omega_{ji}.$$
Then $\omega$ is nondegenerate at a point $p\in U$ iff the skew matrix $(\omega_{ij}(p))$ is invertible.

> [!note] Even-Dimensionality
> If $\omega$ is a nondegenerate $2$-form on $M$, then $\dim M$ is even.

> [!success] Proof
> Fix $p\in M$. The bilinear form $\omega_p$ on $T_pM$ is a nondegenerate skew-symmetric form. By linear algebra, this forces $\dim T_pM$ to be even. Since $\dim T_pM=\dim M$ is constant, the claim follows.

## Symplectic Manifolds, Orientation, and Volume

> [!info] Symplectic Manifold
> A **symplectic manifold** is a pair $(M,\omega)$ where $M$ is a smooth manifold and
> $\omega\in \Omega^2(M)$ satisfies:
> - Closedness: $d\omega=0$;
> - Nondegeneracy: $\omega_p$ is nondegenerate for every $p\in M$.
> 
> The $2$-form $\omega$ is called a **symplectic form**.

> [!danger] Remark
> Closedness is the only differential condition in the definition, and it is **global**:
> it cannot be tested on a single tangent space. This is one of the reasons symplectic geometry is fundamentally global despite having no local invariants (cf., Darboux's theorem later).

Nondegeneracy implies a canonical orientation.

> [!abstract] Symplectic Volume Form
> Let $(M,\omega)$ be a symplectic manifold of dimension $2n$. Then
> $$ \omega^n:=\underbrace{\omega\wedge \cdots \wedge \omega}_{n\ \text{times}} $$
> is a nowhere-vanishing $2n$-form. In particular, $\omega^n$ defines an orientation on $M$ and a volume form
> $$\mathrm{vol}_\omega:=\frac{1}{n!}\,\omega^n.$$

> [!success] Proof
> Fix $p\in M$. Choose a symplectic basis of $T_pM$ so that $\omega_p$ has the standard form.
> In such a basis one checks directly that $\omega_p^n\neq 0$ on $\Lambda^{2n}T_p^*M$.
> Since nonvanishing is an open condition and $\omega^n$ depends smoothly on $p$, it is nowhere zero.

> [!danger] Remark
> Thus symplectic manifolds are automatically oriented. This is one of the first "free structures" in the subject.
> Later, additional structures (almost complex structures, Maslov classes, etc.) will enter in order to define gradings and signs in Floer-type theories; for now, $\omega^n$ is the basic canonical object.

## Basic Examples

We collect a small but durable library of examples. (The cotangent bundle will get its own dedicated section next.)

> [!example] Open Subsets of $\mathbb{R}^{2n}$
> Let $U\subset \mathbb{R}^{2n}$ be open with coordinates $(x_1,\dots,x_n,y_1,\dots,y_n)$ and let
> $$ \omega_0=\sum_{j=1}^n dx_j\wedge dy_j $$
> be the standard symplectic form from \S1.
> Then $(U,\omega_0|_U)$ is symplectic since $d\omega_0=0$ and $\omega_0$ is pointwise nondegenerate.

> [!example] Oriented Surfaces
> Let $\Sigma$ be a connected oriented smooth $2$-manifold and let $\omega$ be an **area form**, i.e.\ a nowhere-vanishing $2$-form compatible with the given orientation.
> Then $(\Sigma,\omega)$ is symplectic: every $2$-form on a surface is automatically closed (because $\Omega^3(\Sigma)=0$), and nonvanishing implies nondegeneracy in dimension $2$.

> [!danger] Remark
> This example is deceptively simple: it says "every oriented surface is symplectic".
> The higher-dimensional theory becomes genuinely new because closedness is no longer automatic.

> [!example] Products
> If $(M_1,\omega_1)$ and $(M_2,\omega_2)$ are symplectic, then
> $$ (M_1\times M_2,\ \pi_1^*\omega_1+\pi_2^*\omega_2) $$
> is symplectic, where $\pi_i$ are the projections.
> Closedness is immediate from $d(\pi_1^*\omega_1+\pi_2^*\omega_2)=0$.
> For nondegeneracy, note that if a tangent vector $(v_1,v_2)$ satisfies
> $$(\pi_1^*\omega_1+\pi_2^*\omega_2)\bigl((v_1,v_2),(\cdot,\cdot)\bigr)=0,$$
> then testing against vectors of the form $(w_1,0)$ gives $\omega_1(v_1,w_1)=0$ for all $w_1$, hence $v_1=0$, and testing against $(0,w_2)$ gives $v_2=0$.

> [!example] Kähler Manifolds as a Source of Examples
> Let $(M,J,g)$ be a Kähler manifold. Then
> $$ \omega(\cdot,\cdot):=g(J\cdot,\cdot) $$
> is a symplectic form on $M$.
> We will not develop Kähler geometry here, but it is useful to remember that many symplectic manifolds arise this way.

## Symplectomorphisms and Their Basic Properties

> [!info] Symplectomorphism
> Let $(M,\omega)$ and $(N,\eta)$ be symplectic manifolds.
> A diffeomorphism $\varphi:M\to N$ is a **symplectomorphism** if $\varphi^*\eta=\omega$.
> When $M=N$ and $\eta=\omega$, the group of symplectomorphisms is denoted
> $$ \mathrm{Symp}(M,\omega):=\{\varphi\in \mathrm{Diff}(M)\mid \varphi^*\omega=\omega\}. $$

> [!danger] Remark
> The condition $\varphi^*\omega=\omega$ is strictly stronger than volume preservation:
> a symplectomorphism preserves a bilinear form on each tangent space, not merely the induced density.

> [!abstract] Symplectomorphisms Form a Subgroup
> $\mathrm{Symp}(M,\omega)$ is a subgroup of $\mathrm{Diff}(M)$.

> [!success] Proof
> If $\varphi^*\omega=\omega$ and $\psi^*\omega=\omega$, then $(\varphi\circ\psi)^*\omega=\psi^*(\varphi^*\omega)=\psi^*\omega=\omega$.
> Also $(\varphi^{-1})^*\omega=\omega$ because pulling back the identity $\varphi^*\omega=\omega$ by $\varphi^{-1}$ yields $\omega=(\varphi^{-1})^*\omega$.

> [!abstract] Symplectomorphisms Preserve Symplectic Volume
> If $\varphi\in \mathrm{Symp}(M,\omega)$ and $\dim M=2n$, then
> $$ \varphi^*(\omega^n)=\omega^n. $$
> In particular, symplectomorphisms preserve the orientation and the volume form $\mathrm{vol}_\omega$.

> [!success] Proof
> Using multiplicativity of pullback with respect to wedge products,
> $$ \varphi^*(\omega^n)=(\varphi^*\omega)^n=\omega^n. $$

> [!example] Linear Symplectomorphisms
> Any linear symplectomorphism $A\in \mathrm{Sp}(2n,\mathbb{R})$ defines a symplectomorphism of $(\mathbb{R}^{2n},\omega_0)$ by $x\mapsto Ax$.
> Translations of $\mathbb{R}^{2n}$ are also symplectomorphisms since $dx_j,dy_j$ are translation-invariant.

## The Musical Isomorphisms and Local Coordinate Expressions

A symplectic form provides an isomorphism between tangent and cotangent bundles.
This is the symplectic analogue of raising and lowering indices in Riemannian geometry, but without any notion of length.

> [!info] Musical Isomorphisms
> Let $(M,\omega)$ be symplectic. Define the bundle map
> $$ \omega^\flat:TM\longrightarrow T^*M,\qquad \omega^\flat(X):=\iota_X\omega, $$
> i.e.\ $(\omega^\flat(X))(Y)=\omega(X,Y)$.
> Since $\omega$ is nondegenerate, $\omega^\flat$ is a vector bundle isomorphism.
> Its inverse is denoted
> $$ \omega^\sharp:T^*M\longrightarrow TM. $$

> [!danger] Remark
> Given a $1$-form $\alpha$, the vector field $\omega^\sharp(\alpha)$ is uniquely characterized by
> $$ \iota_{\omega^\sharp(\alpha)}\omega=\alpha. $$
> In particular, every function $H\in C^\infty(M)$ produces a canonical vector field $\omega^\sharp(dH)$.
> We will study this systematically in the Hamiltonian section later.

In local coordinates $(x^1,\dots,x^{2n})$ on $U\subset M$, write
$$ \omega=\frac{1}{2}\sum_{i,j=1}^{2n}\omega_{ij}\,dx^i\wedge dx^j. $$
If $X=\sum_i X^i\partial_{x^i}$, then
$$ \iota_X\omega=\sum_{j=1}^{2n}\Bigl(\sum_{i=1}^{2n}\omega_{ij}X^i\Bigr)\,dx^j. $$
Thus the components of $\omega^\flat(X)$ are obtained by multiplying the matrix $(\omega_{ij})$ with the column vector $(X^i)$.
Since $(\omega_{ij})$ is invertible, we can invert this relation pointwise to compute $\omega^\sharp$ explicitly.

> [!danger] Remark
> This coordinate computation is occasionally useful in concrete examples, but conceptually
> $\omega^\flat$ and $\omega^\sharp$ are best viewed as intrinsic maps.
> They will let us translate between vector fields and $1$-forms in a way that is compatible with pullbacks.

## Infinitesimal Symplectomorphisms and the Pullback Variation Formula

One of the most important computational lemmata in symplectic geometry relates time-dependent flows and the exterior calculus. It will be the engine behind Moser's trick later, so we record it now.

> [!note] Derivative of a Pulled-Back Form
> Let $\{\varphi_t\}_{t\in I}$ be a smooth isotopy of diffeomorphisms of $M$ with time-dependent generating vector field $X_t$,
> meaning
> $$\frac{d}{dt}\varphi_t=X_t\circ \varphi_t.$$
> Then for any differential form $\alpha\in \Omega^k(M)$,
> $$ \frac{d}{dt}\bigl(\varphi_t^*\alpha\bigr)=\varphi_t^*(\mathcal{L}_{X_t}\alpha), $$
> where $\mathcal{L}_{X_t}$ is the Lie derivative.

> [!success] Proof
> This is a standard identity in differential geometry; one way to see it is to test both sides on time-dependent vector fields
> and use the definition of Lie derivative as the infinitesimal action of the flow on tensors.

Together with Cartan's formula $\mathcal{L}_X=d\iota_X+\iota_X d$, we obtain a particularly clean consequence
for closed forms.

> [!idea] Infinitesimal Symplectic Condition
> Let $(M,\omega)$ be symplectic and let $X$ be a vector field on $M$. Then
> $$ \mathcal{L}_X\omega=0 \iff d(\iota_X\omega)=0. $$

> [!success] Proof
> By Cartan's formula,
> $$ \mathcal{L}_X\omega=d(\iota_X\omega)+\iota_X(d\omega)=d(\iota_X\omega), $$
> since $d\omega=0$. This gives the equivalence.

> [!info] Symplectic Vector Field
> A vector field $X$ on a symplectic manifold $(M,\omega)$ is called **symplectic** if $\mathcal{L}_X\omega=0$.
> Equivalently, by the previous corollary, $X$ is symplectic iff the $1$-form $\iota_X\omega$ is closed.

> [!danger] Remark
> If $\iota_X\omega$ is not only closed but **exact**, say $\iota_X\omega=dH$, then $X=\omega^\sharp(dH)$.
> Such vector fields are the **Hamiltonian vector fields** and will be the basic dynamical objects later.
> The distinction between "closed" and "exact" here is global and is measured by $H^1(M;\mathbb{R})$.

## A First Global Constraint: Exactness

While there are no local invariants of symplectic forms (to be proved later),
there are simple global constraints one can already see at this stage.

> [!abstract] No Exact Symplectic Form on a Closed Manifold
> If $\omega=d\lambda$ is an exact symplectic form on a closed manifold $M$ (compact without boundary),
> then $\omega^n$ is exact as well. In particular, $(M,\omega)$ cannot be symplectic.

> [!success] Proof
> If $\omega=d\lambda$, then
> $$ \omega^n = d\lambda\wedge \omega^{n-1}=d(\lambda\wedge \omega^{n-1}), $$
> since $d\omega=0$. Thus $\omega^n$ is exact. On a closed manifold, an exact top-degree form integrates to zero
> by Stokes' theorem, but $\omega^n$ is a volume form and hence has nonzero integral (up to sign).
> This contradiction shows no exact symplectic form exists on a closed manifold.

> [!danger] Remark
> This is a first illustration of the symplectic theme: the conditions $d\omega=0$ and nondegeneracy allow us to upgrade differential identities into global obstructions. We will exploit the same mechanism repeatedly (for instance, in Moser's argument and in action/energy identities later).


