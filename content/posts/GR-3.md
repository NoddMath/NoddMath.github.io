+++
date = "2025-02-19T15:44:10-04:00"
draft = false
title = "Fields and Stress–Energy: from a Scalar to Electromagnetism"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

A point particle is a great warm-up, but it is also a cheat: you hide physics on a worldline and pretend the rest of spacetime is empty. Field theory removes that hiding place. The degrees of freedom live everywhere, and so does their energy and momentum. If we want gravity to couple to “everything,” we need one object that summarizes what matter does in spacetime. That object is $T_{ab}$.

> [!notify] Conventions for this lecture
> We work on Minkowski spacetime $(\mathbb{R}^{1,3},\eta)$ with signature $(-,+,+,+)$ and $c=1$. Indices are raised and lowered with $\eta$. We write $\partial_\mu=\frac{\partial}{\partial x^\mu}$ and $\partial^\mu=\eta^{\mu\nu}\partial_\nu$. The d'Alembertian is
> $$\Box := \partial_\mu\partial^\mu = \eta^{\mu\nu}\partial_\mu\partial_\nu.$$
> For integration we use the coordinate volume element $d^4x=dt\,d^3x$.

## The stress–energy tensor as a local book of accounts

Take an inertial observer with 4-velocity $u^\mu$ (future-directed, $u\cdot u=-1$). The scalar
$$\rho(u):=T_{\mu\nu}u^\mu u^\nu$$
is interpreted as the energy density measured by that observer. The vector
$$j^\mu(u):=-T^{\mu}{}_{\nu}u^\nu$$
is the corresponding energy–momentum current as seen by $u$ (it will be timelike/null and future-directed under reasonable positivity assumptions). In a standard inertial frame, the components have the familiar meanings:
$$T^{00}\ \text{energy density},\quad T^{0i}\ \text{momentum density / energy flux},\quad T^{ij}\ \text{stress (momentum flux)}.$$

> [!danger] Remark
> This is exactly the data gravity will read later. Einstein's equation is not “curvature equals energy,” but rather “curvature equals the fluxes of energy and momentum in all directions.”

## A scalar field: the cleanest first example

Let $\phi:\mathbb{R}^{1,3}\to\mathbb{R}$ be a real scalar field. Start with a Lagrangian density
$$\mathcal{L}(\phi,\partial\phi)= -\frac12\,\eta^{\mu\nu}(\partial_\mu\phi)(\partial_\nu\phi)-V(\phi),$$
where $V$ is a potential (think $V(\phi)=\tfrac12 m^2\phi^2$ for Klein–Gordon).

> [!info] Action functional for a scalar field
> The action is
> $$S[\phi]:=\int_{\mathbb{R}^{1,3}}\mathcal{L}(\phi,\partial\phi)\,d^4x,$$
> where variations $\delta\phi$ are taken to have compact support (or to vanish sufficiently fast at infinity).

> [!abstract] Euler–Lagrange equation for $\phi$
> Stationarity of $S$ under compactly supported variations implies the field equation
> $$\partial_\mu\Bigl(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\Bigr)-\frac{\partial\mathcal{L}}{\partial\phi}=0.$$
> For the above $\mathcal{L}$ this becomes
> $$\Box\phi = V'(\phi).$$
> In particular, for $V(\phi)=\tfrac12 m^2\phi^2$ one obtains the Klein–Gordon equation $\Box\phi-m^2\phi=0$.

> [!success] Proof
> Compute the first variation:
> $$\delta S=\int\left(\frac{\partial\mathcal{L}}{\partial\phi}\,\delta\phi+\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\,\delta(\partial_\mu\phi)\right)d^4x.$$
> Since $\delta(\partial_\mu\phi)=\partial_\mu(\delta\phi)$, integrate by parts:
> $$\int \frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\,\partial_\mu(\delta\phi)\,d^4x= -\int \partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\right)\delta\phi\,d^4x,$$
> with no boundary term because $\delta\phi$ has compact support. Thus
> $$\delta S=\int\left(\frac{\partial\mathcal{L}}{\partial\phi}-\partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}\right)\right)\delta\phi\,d^4x.$$
> Arbitrariness of $\delta\phi$ yields the Euler–Lagrange equation. For our $\mathcal{L}$,
> $$\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi)}=-\partial^\mu\phi,\qquad \frac{\partial\mathcal{L}}{\partial\phi}=-V'(\phi),$$
> so $\partial_\mu(-\partial^\mu\phi)+V'(\phi)=0$, i.e. $\Box\phi=V'(\phi)$.

## $T_{\mu\nu}$ from symmetry: Noether and the canonical tensor

The action is invariant under spacetime translations $x^\mu\mapsto x^\mu+\epsilon^\mu$. Noether's theorem then produces a conserved current, and in field theory that conserved current is precisely the divergence-free tensor you want.

> [!info] Canonical stress–energy tensor
> For a Lagrangian density $\mathcal{L}(\phi^A,\partial\phi^A)$ (possibly many fields $\phi^A$), define
> $$S^{\mu}{}_{\nu}:= \frac{\partial\mathcal{L}}{\partial(\partial_\mu \phi^A)}\,\partial_\nu\phi^A - \delta^\mu{}_\nu\,\mathcal{L}.$$

> [!abstract] Conservation of the canonical tensor
> If $\mathcal{L}$ has no explicit $x$-dependence and the fields satisfy the Euler–Lagrange equations, then
> $$\partial_\mu S^{\mu}{}_{\nu}=0.$$

> [!success] Proof
> Differentiate $S^{\mu}{}_{\nu}$ and use the product rule:
> $$\partial_\mu S^{\mu}{}_{\nu}=\partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu \phi^A)}\right)\partial_\nu\phi^A+\frac{\partial\mathcal{L}}{\partial(\partial_\mu \phi^A)}\partial_\mu\partial_\nu\phi^A-\partial_\nu\mathcal{L}.$$
> By the chain rule (and the absence of explicit $x$-dependence),
> $$\partial_\nu\mathcal{L}=\frac{\partial\mathcal{L}}{\partial\phi^A}\partial_\nu\phi^A+\frac{\partial\mathcal{L}}{\partial(\partial_\mu\phi^A)}\partial_\nu\partial_\mu\phi^A.$$
> Subtracting cancels the second-derivative terms, leaving
> $$\partial_\mu S^{\mu}{}_{\nu}=\left(\partial_\mu\!\left(\frac{\partial\mathcal{L}}{\partial(\partial_\mu \phi^A)}\right)-\frac{\partial\mathcal{L}}{\partial\phi^A}\right)\partial_\nu\phi^A,$$
> which vanishes on-shell by the Euler–Lagrange equations.

> [!danger] Remark
> This tensor is conserved essentially by construction, but it has two common defects: it need not be symmetric, and for gauge fields it need not be gauge invariant. So it is useful as a derivation tool, but not always the object gravity should couple to.

## $T_{\mu\nu}$ from geometry: the symmetric (Hilbert) definition

If gravity couples to matter through the metric, then $T_{\mu\nu}$ should be what you get by asking: **how does the matter action change when you change the metric?** That question forces symmetry and (in the right setup) the correct notion of conservation.

> [!info] Hilbert stress–energy tensor
> Given a matter action in curved spacetime
> $$S_m[g,\Phi]=\int \mathcal{L}_m(g,\Phi,\nabla\Phi)\,\sqrt{-g}\,d^4x,$$
> the stress–energy tensor is defined by
> $$T_{\mu\nu}:=-\frac{2}{\sqrt{-g}}\frac{\delta S_m}{\delta g^{\mu\nu}}\qquad\text{(holding the matter fields $\Phi$ fixed)}.$$
> In Minkowski space, this reduces to the same formula evaluated at $g=\eta$.

> [!danger] Remark
> Two key consequences are baked in:
> 1. $T_{\mu\nu}$ is symmetric (because $g^{\mu\nu}$ is), and
> 2. in curved spacetime, diffeomorphism invariance of $S_m$ leads to $\nabla_\mu T^{\mu\nu}=0$ on-shell.
> We will prove (2) carefully once we have the covariant calculus in place; in Minkowski it becomes $\partial_\mu T^{\mu\nu}=0$.

> [!abstract] Stress–energy of a scalar field
> For the scalar Lagrangian density above, the Hilbert stress–energy tensor in Minkowski spacetime is
> $$T_{\mu\nu}= (\partial_\mu\phi)(\partial_\nu\phi) - \eta_{\mu\nu}\left(\frac12\,\partial_\alpha\phi\,\partial^\alpha\phi + V(\phi)\right).$$
> It is symmetric, and on solutions of $\Box\phi=V'(\phi)$ it satisfies $\partial_\mu T^{\mu\nu}=0$.

> [!success] Proof
> The formula is the standard outcome of metric variation for scalar fields: one varies $\eta^{\mu\nu}\partial_\mu\phi\,\partial_\nu\phi$ and the volume factor, then sets $g=\eta$. Conservation can be checked directly: compute $\partial_\mu T^{\mu\nu}$, expand with the product rule, and use the field equation to cancel the $V'(\phi)$ term.

## Energy conditions (their first silhouette)

Even before we write Einstein's equation, we can say what we would like $T_{\mu\nu}$ to represent physically.

> [!info] Null, weak, dominant, and strong energy conditions
> Let $T_{\mu\nu}$ be a symmetric tensor.
> 1. **NEC**: $T_{\mu\nu}k^\mu k^\nu \ge 0$ for all null $k$.
> 2. **WEC**: $T_{\mu\nu}u^\mu u^\nu \ge 0$ for all timelike $u$.
> 3. **DEC**: for all future-directed timelike $u$, the vector $-T^{\mu}{}_{\nu}u^\nu$ is future-directed causal.
> 4. **SEC**: $\bigl(T_{\mu\nu}-\tfrac12 T\,\eta_{\mu\nu}\bigr)u^\mu u^\nu \ge 0$ for all timelike $u$, where $T=T^\mu{}_\mu$.

> [!danger] Remark
> These are not axioms of nature; they are hypotheses that make global results possible. They are also the bridge between “local positivity of energy” and “global focusing of geodesics” (which will later show up in Raychaudhuri and the singularity theorems).

## Electromagnetism as a training ground: $F=dA$, gauge symmetry, and Maxwell equations

Electromagnetism is perfect practice: it is relativistic, it is gauge invariant, it naturally wants differential forms, and its stress–energy tensor has just enough structure to keep you honest without becoming a swamp.

Let $A=A_\mu dx^\mu$ be a 1-form potential. Define the Faraday 2-form
$$F:=dA,\qquad\text{equivalently}\qquad F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu.$$
Gauge transformations are
$$A\longmapsto A+d\chi,$$
and leave $F$ unchanged.

> [!info] Maxwell action with sources
> Given a conserved current $J^\mu$ (so $\partial_\mu J^\mu=0$), define
> $$S[A]=-\frac{1}{16\pi}\int F_{\mu\nu}F^{\mu\nu}\,d^4x \;+\;\int A_\mu J^\mu\,d^4x.$$

> [!abstract] Maxwell equations from variation
> Stationarity of $S[A]$ under compactly supported variations $\delta A$ yields
> $$\partial_\mu F^{\mu\nu}=4\pi J^\nu.$$
> Independently, since $F=dA$, we have the identity
> $$\partial_{[\lambda}F_{\mu\nu]}=0\qquad\text{(equivalently, }dF=0\text{)}.$$
> Together these are Maxwell's equations.

> [!success] Proof
> Vary $A\mapsto A+\varepsilon\delta A$. Then $\delta F_{\mu\nu}=\partial_\mu\delta A_\nu-\partial_\nu\delta A_\mu$ and
> $$\delta\!\left(-\frac{1}{16\pi}F_{\mu\nu}F^{\mu\nu}\right)=-\frac{1}{8\pi}F^{\mu\nu}\delta F_{\mu\nu}=-\frac{1}{4\pi}F^{\mu\nu}\partial_\mu\delta A_\nu$$
> (using antisymmetry of $F^{\mu\nu}$). Integrate by parts:
> $$-\frac{1}{4\pi}\int F^{\mu\nu}\partial_\mu\delta A_\nu\,d^4x=\frac{1}{4\pi}\int (\partial_\mu F^{\mu\nu})\,\delta A_\nu\,d^4x,$$
> with no boundary term (compact support). The source term gives $\int J^\nu\delta A_\nu\,d^4x$. Hence
> $$\delta S=\int\left(\frac{1}{4\pi}\partial_\mu F^{\mu\nu}-J^\nu\right)\delta A_\nu\,d^4x,$$
> and arbitrariness of $\delta A$ yields $\partial_\mu F^{\mu\nu}=4\pi J^\nu$. The identity $\partial_{[\lambda}F_{\mu\nu]}=0$ is $d^2A=0$.

> [!danger] Maxwell in form language
> Once we have the Hodge star $\star$, the second pair can be written as
> $$d\star F = 4\pi\,\star J,$$
> where $\star J$ is a 3-form encoding the current. This is the coordinate-free form we will reuse in curved spacetime by replacing $d$ with $d$ (still!) and letting $\star$ depend on $g$.

## The electromagnetic stress–energy tensor (and why the canonical one is not enough)

> [!abstract] Stress–energy of the Maxwell field
> The symmetric, gauge-invariant stress–energy tensor of electromagnetism is
> $$T_{\mu\nu}=\frac{1}{4\pi}\left(F_{\mu\alpha}F_{\nu}{}^{\alpha}-\frac14\,\eta_{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}\right).$$
> It is traceless: $T^\mu{}_\mu=0$.

> [!success] Proof
> This is the Hilbert stress–energy tensor obtained by varying the Maxwell action with respect to the metric. To see tracelessness, contract with $\eta^{\mu\nu}$:
> $$T^\mu{}_\mu=\frac{1}{4\pi}\left(F^{\mu\alpha}F_{\mu\alpha}-\frac14\cdot 4\,F_{\alpha\beta}F^{\alpha\beta}\right)=0.$$

> [!danger] Remark
> For Maxwell theory, the canonical tensor derived from translation invariance is generally not symmetric and not gauge invariant. One can “improve” it by adding a total divergence (Belinfante–Rosenfeld type symmetrization), but the metric-variation definition lands directly on the physically correct object.

## $\mathbf{E}$ and $\mathbf{B}$: extracting familiar physics

Fix an inertial frame with coordinates $(t,\mathbf{x})$. Define
$$E_i:=F_{i0},\qquad B^i:=\frac12\,\varepsilon^{ijk}F_{jk},$$
with $\varepsilon^{123}=+1$. Then one checks the invariant
$$F_{\mu\nu}F^{\mu\nu}=2\,(|\mathbf{B}|^2-|\mathbf{E}|^2).$$

> [!abstract] Energy density, Poynting vector, and Maxwell stress
> In this inertial frame, the components of $T^{\mu\nu}$ are
> $$T^{00}=\frac{1}{8\pi}\bigl(|\mathbf{E}|^2+|\mathbf{B}|^2\bigr),\qquad T^{0i}=\frac{1}{4\pi}\,(\mathbf{E}\times\mathbf{B})^i,$$
> and
> $$T^{ij}=\frac{1}{8\pi}\bigl(|\mathbf{E}|^2+|\mathbf{B}|^2\bigr)\delta^{ij}-\frac{1}{4\pi}\bigl(E^iE^j+B^iB^j\bigr).$$

> [!success] Proof
> Insert the $(\mathbf{E},\mathbf{B})$ decomposition into
> $$T^{\mu\nu}=\frac{1}{4\pi}\left(F^{\mu}{}_{\alpha}F^{\nu\alpha}-\frac14\,\eta^{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}\right),$$
> use $F^{0i}=-F_{0i}$ and $F^{ij}=F_{ij}$ (with our signature), and collect terms. The cross product arises from the spatial Levi-Civita symbol hidden in $F_{ij}$.

> [!abstract] Exchange of energy–momentum with sources
> Let $T^{\mu\nu}$ be the Maxwell stress–energy tensor. Then
> $$\partial_\mu T^{\mu\nu} = - F^{\nu\lambda} J_\lambda.$$
> In particular, in vacuum ($J=0$) one has $\partial_\mu T^{\mu\nu}=0$.

> [!success] Proof
> Differentiate the expression for $T^{\mu\nu}$, expand using the product rule, and then use Maxwell's equations $\partial_\mu F^{\mu\nu}=4\pi J^\nu$ together with the Bianchi identity $\partial_{[\lambda}F_{\mu\nu]}=0$ to rewrite all second-derivative terms. The antisymmetry of $F$ forces cancellations, leaving the stated coupling to $J$. (This is the field-theory form of “the field pushes back on the charges.”)

> [!danger] Remark
> The last identity is the local, covariant statement behind Poynting's theorem and the Lorentz force law. It is also the pattern GR will follow: “divergence of total stress–energy vanishes,” with gravity included in a subtler way.
