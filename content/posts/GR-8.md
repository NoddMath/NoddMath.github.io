+++
date = "2025-03-03T15:44:10-04:00"
draft = false
title = "Volume Forms, Divergence, and Stokes: The Geometric Bedrock of Conservation Laws"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

Here is a little GR magic trick that is **not** magic once you know what to look for.

You start with a **local** statement like
$$\nabla_a J^a = 0,$$
and you want to turn it into a statement about what a laboratory can count:
charge in a box, energy flowing through a wall, momentum entering and leaving a region of spacetime. The bridge is pure geometry: a volume form, a divergence, and Stokes' theorem.

This lecture sets up that bridge so that when $\nabla^aT_{ab}=0$ appears later, we immediately know its global content.

## Orientation and the natural volume form

Let $(M,g)$ be a time-oriented Lorentzian $4$-manifold with signature $(-,+,+,+)$.

> [!info] Orientation and volume form
> An **orientation** on $M$ is a choice of a nowhere-vanishing smooth $4$-form $\varepsilon$ up to multiplication by a positive function.
> A specific nowhere-vanishing $4$-form $\varepsilon$ is called a **volume form**.

Once an orientation is fixed, the metric gives a canonical choice up to sign.

> [!info] Metric volume form
> In an oriented coordinate chart $(x^\mu)$, write $g=\det(g_{\mu\nu})$ (so $g<0$ in Lorentz signature).
> The **metric volume form** is
> $$\mathrm{dVol}_g := \sqrt{-g}\, dx^0\wedge dx^1\wedge dx^2\wedge dx^3.$$

This is the object that makes spacetime integration coordinate-invariant.
The factor $\sqrt{-g}$ is exactly what fixes the Jacobian mismatch under coordinate changes (and it is the Lorentzian cousin of the familiar $\sqrt{\det g}$).

> [!danger] Remark
> For the Levi-Civita connection $\nabla$, one has
> $$\nabla_a(\mathrm{dVol}_g)=0.$$
> This is the differential-geometric reason the divergence theorem takes its cleanest form with $\nabla$.

## Divergence: the definition that makes Stokes automatic

There are two equally useful ways to define divergence. One is coordinate-free and built for Stokes; the other is the practical coordinate formula you will actually compute with.

> [!info] Divergence from the volume form
> Let $M$ be oriented with a chosen volume form $\varepsilon$, and let $X$ be a vector field.
> The **divergence** $\mathrm{div}_\varepsilon X$ is the unique function satisfying
> $$d(\iota_X \varepsilon) = (\mathrm{div}_\varepsilon X)\,\varepsilon.$$

This definition is designed so that Stokes' theorem immediately turns “divergence-free” into a flux statement.

When $\varepsilon=\mathrm{dVol}_g$ comes from the metric, this divergence agrees with the covariant one.

> [!abstract] Divergence equals contraction of $\nabla$
> On a pseudo-Riemannian manifold $(M,g)$ with Levi-Civita connection,
> $$\mathrm{div}_{\mathrm{dVol}_g} X = \nabla_a X^a.$$

> [!success] Proof
> This is a standard computation: choose local coordinates adapted to $X$ at a point and compare $d(\iota_X \mathrm{dVol}_g)$ with $\nabla_a X^a\,\mathrm{dVol}_g$.
> A clean derivation is given by expressing $\mathrm{dVol}_g$ in coordinates and using $d\,\mathrm{dVol}_g=0$, leading to $\mathrm{div}X=\nabla_\mu X^\mu$.

> [!abstract] Coordinate formula
> In coordinates $(x^\mu)$,
> $$\nabla_\mu X^\mu=\frac{1}{\sqrt{-g}}\,\partial_\mu\!\left(\sqrt{-g}\,X^\mu\right).$$

> [!success] Proof
> Start from $\nabla_\mu X^\mu=\partial_\mu X^\mu+\Gamma^\mu{}_{\mu\nu}X^\nu$ and use the identity
> $$\Gamma^\mu{}_{\mu\nu}=\frac{\partial_\nu(\sqrt{-g})}{\sqrt{-g}},$$
> which follows from differentiating the determinant of $(g_{\mu\nu})$.

> [!danger] Remark
> This formula is the curved-spacetime version of “$\nabla\cdot(\rho \mathbf{v})$” from vector calculus, with $\sqrt{-g}$ playing the role of the correct measure factor.

## Stokes and the divergence theorem in spacetime form

Now we package everything into a single statement.

> [!note] Stokes' theorem
> Let $\Omega$ be an oriented smooth $n$-manifold with (piecewise smooth) boundary $\partial\Omega$.
> For any compactly supported $(n-1)$-form $\alpha$ on $\Omega$,
> $$\int_\Omega d\alpha = \int_{\partial\Omega} \alpha,$$
> with the induced boundary orientation.

> [!success] Proof
> Standard; the entire content is in making orientations consistent.

Taking $\alpha=\iota_X\mathrm{dVol}_g$ gives the divergence theorem.

> [!note] Divergence theorem: Gauss--Stokes form
> Let $\Omega\subset M$ be a compact oriented $4$-dimensional region with piecewise smooth boundary $\partial\Omega$.
> Then for any smooth vector field $X$,
> $$\int_\Omega (\nabla_a X^a)\,\mathrm{dVol}_g=\int_{\partial\Omega} \iota_X \mathrm{dVol}_g.$$

> [!success] Proof
> By definition, $d(\iota_X\mathrm{dVol}_g)=(\nabla_a X^a)\mathrm{dVol}_g$, and then Stokes applies.

## Hypersurface flux: the $d\Sigma_a$ that you will use everywhere

To connect with physics, we want boundary integrals that look like “normal component times area element.”

Let $\Sigma$ be an embedded, oriented, non-null hypersurface (spacelike or timelike) with a chosen unit normal $n^a$.
Let $d\Sigma$ denote the induced volume element on $\Sigma$ (a $3$-form, or equivalently a scalar density).

> [!info] Directed hypersurface element
> Define the covector-valued measure
> $$d\Sigma_a:=n_a\, d\Sigma.$$
> For a vector field $X^a$, the flux through $\Sigma$ is
> $$\int_\Sigma X^a\, d\Sigma_a=\int_\Sigma X^a n_a\, d\Sigma.$$

This is exactly the boundary term in the divergence theorem when the boundary piece is a hypersurface; it is the curved-spacetime version of $\int_{\partial V} \mathbf{X}\cdot d\mathbf{S}$.

> [!important] Null boundaries
> If $\Sigma$ is null, there is no unit normal and one must choose an appropriate normalization of a null normal and an induced measure.
> The divergence theorem still holds, but $d\Sigma_a$ needs a slightly different construction.
> We will postpone that until we actually need null hypersurfaces (horizons).

## From local to global: conserved currents and integral conservation

Now comes the move we will repeat for charge, particle number, and later stress-energy.

> [!info] Conserved current and charge on a slice
> A vector field $J^a$ is a **conserved current** if
> $$\nabla_a J^a = 0.$$
> If $\Sigma$ is a spacelike hypersurface with future-directed unit normal $n^a$, define the **charge on $\Sigma$**
> $$Q(\Sigma) := \int_\Sigma J^a n_a\, d\Sigma.$$

> [!note] Global conservation law
> Let $\Omega$ be a compact spacetime region whose boundary decomposes as
> $$\partial\Omega = \Sigma_2 \cup (-\Sigma_1) \cup \mathcal{B},$$
> where $\Sigma_1,\Sigma_2$ are spacelike hypersurfaces (think “initial” and “final”) and $\mathcal{B}$ is the remaining timelike (or mixed) boundary.
> Then for any current $J^a$,
> $$\int_\Omega (\nabla_a J^a)\,\mathrm{dVol}_g=\int_{\Sigma_2} J^a n_a\, d\Sigma-\int_{\Sigma_1} J^a n_a\, d\Sigma+\int_{\mathcal{B}} J^a d\Sigma_a.$$
> In particular, if $\nabla_a J^a=0$ and there is no flux through $\mathcal{B}$, then $Q(\Sigma_2)=Q(\Sigma_1)$.

> [!success] Proof
> Apply the divergence theorem with $X^a=J^a$ and rewrite the boundary integral using $d\Sigma_a$ on each component.
> The minus sign on $\Sigma_1$ is the induced orientation convention.

> [!danger] Remark
> In flat space, one learns $\partial_t\rho + \nabla\cdot\mathbf{j}=0$ and then integrates over a spatial region to get “time change equals flux through the boundary.”
> The statement above is the same idea, but it does not care what coordinates you used, or whether spacetime is curved.

## Preview: the stress-energy case and why Killing fields matter

Later, Einstein's equation will force (via the contracted Bianchi identity) the local law
\[
\nabla^a T_{ab} = 0.
\]
What does that mean globally?

First, you can always build a current from a vector field $X^b$:
\[
J^a[X] := T^{a}{}_{b} X^b.
\]

> [!abstract] Divergence of the stress-energy current
> For any vector field $X$,
> $$\nabla_a J^a[X]=(\nabla_a T^{a}{}_{b})X^b + \frac12\,T^{ab}\bigl(\nabla_a X_b+\nabla_b X_a\bigr).$$

> [!success] Proof
> Compute $\nabla_a(T^{a}{}_{b}X^b)=(\nabla_a T^{a}{}_{b})X^b + T^{ab}\nabla_a X_b$ and then symmetrize $T^{ab}\nabla_a X_b$ using $T^{ab}=T^{ba}$.

> [!idea] Killing fields produce conserved currents when $\nabla^aT_{ab}=0$
> If $\nabla^aT_{ab}=0$ and $X$ is Killing, i.e. $\nabla_a X_b+\nabla_b X_a=0$, then
> $$\nabla_a J^a[X]=0,$$
> hence the associated charge
> $$Q_X(\Sigma):=\int_\Sigma T^{a}{}_{b}X^b\, n_a\, d\Sigma$$
> is conserved (assuming no flux through the side boundary).

> [!danger] Remark
> In Schwarzschild and Kerr, the spacetime is built with Killing fields (time translation, axial rotation).
> That is exactly why we can talk about conserved energy and angular momentum for geodesics and for fields.
> In a generic dynamical spacetime (say, a binary merger), there may be no timelike Killing field, so there is no global energy conservation law of this simple type—yet $\nabla^aT_{ab}=0$ still gives precise integral balance laws for finite regions.

> [!example] Flat-spacetime warm-up: why integrating $T^{0\nu}$ makes sense
> In Minkowski space one has $\partial_\mu T^{\mu\nu}=0$, and integrating $T^{0\nu}$ over a spatial region produces a 4-momentum in that region whose time change is a boundary flux term.
> This is the prototype for the curved-spacetime statement above, where $\sqrt{-g}$ and $d\Sigma_a$ replace the naive Euclidean measures.
