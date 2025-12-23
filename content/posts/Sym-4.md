+++
date = "2024-11-01T15:44:10-04:00"
draft = false
title = "Hamiltonian Vector Fields and Poisson Brackets"
categories = [ "Math" ]
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

This section is the entry point from symplectic geometry into dynamics.
The nondegeneracy of a symplectic form identifies vector fields with $1$-forms, and closedness turns many infinitesimal computations into global constraints. The central players are **Hamiltonian vector fields** and the induced **Poisson bracket** on functions.

## Hamiltonian and Symplectic Vector Fields

Let $(M,\omega)$ be a symplectic manifold of dimension $2n$.
Recall that nondegeneracy gives bundle isomorphisms
$$\omega^\flat:TM\to T^*M,\qquad \omega^\flat(X)=\iota_X\omega,\qquad\text{and}\qquad \omega^\sharp:T^*M\to TM,$$
characterized by $\iota_{\omega^\sharp(\alpha)}\omega=\alpha$.

> [!info] Symplectic and Hamiltonian Vector Fields
> A vector field $X$ on $(M,\omega)$ is called **symplectic** if $\mathcal{L}_X\omega=0$.
> A vector field $X$ is called **Hamiltonian** if there exists a smooth function $H\in C^\infty(M)$ such that
> $$\iota_X\omega=dH.$$
> In that case $X$ is uniquely determined by $H$ and is denoted $X_H$.
> The function $H$ is called a **Hamiltonian**.

> [!danger] Remark
> Hamiltonian vector fields always exist: given $H$, define $X_H:=\omega^\sharp(dH)$.
> Uniqueness holds because $\omega^\flat$ is an isomorphism.

> [!abstract] Hamiltonian Implies Symplectic
> For any $H\in C^\infty(M)$, the Hamiltonian vector field $X_H$ satisfies $\mathcal{L}_{X_H}\omega=0$.

> [!success] Proof
> Cartan's formula gives
> $$\mathcal{L}_{X_H}\omega=d(\iota_{X_H}\omega)+\iota_{X_H}(d\omega)=d(dH)+0=0.$$

> [!danger] Symplectic vs. Hamiltonian Is Global
> If $X$ is symplectic then $d(\iota_X\omega)=0$, so $\iota_X\omega$ is a closed $1$-form.
> It is Hamiltonian exactly when this closed form is exact.
> Thus the obstruction to being Hamiltonian lies in $H^1(M;\mathbb{R})$.

> [!example] A Symplectic but Non-Hamiltonian Vector Field on a Torus
> Let $M=\mathbb{T}^2=\mathbb{R}^2/\mathbb{Z}^2$ with coordinates $(x,y)\ \mathrm{mod}\ \mathbb{Z}^2$
> and symplectic form $\omega=dx\wedge dy$.
> The constant vector field $X=\partial_x$ is symplectic because $\mathcal{L}_X\omega=0$.
> However,
> $$\iota_X\omega=\iota_{\partial_x}(dx\wedge dy)=dy,$$
> which is closed but not exact on $\mathbb{T}^2$. Hence $X$ is not Hamiltonian.

## Hamiltonian Flows and Hamiltonian Isotopies

Let $H\in C^\infty(M)$ be time-independent. The ODE $\dot{\gamma}(t)=X_H(\gamma(t))$ defines a local flow $\varphi_H^t$ whenever solutions exist.

> [!abstract] Hamiltonian Flows Preserve $\omega$
> Assume $X_H$ has a flow $\varphi_H^t$ defined on some time interval.
> Then $\varphi_H^t$ is a symplectomorphism for every $t$ in its domain, i.e.
> $$(\varphi_H^t)^*\omega=\omega.$$

> [!success] Proof
> Differentiate $(\varphi_H^t)^*\omega$ with respect to $t$:
> $$\frac{d}{dt}(\varphi_H^t)^*\omega=(\varphi_H^t)^*(\mathcal{L}_{X_H}\omega)=0,$$
> because $\mathcal{L}_{X_H}\omega=0$. Since $(\varphi_H^0)^*\omega=\omega$, the claim follows.

In practice one often uses time-dependent Hamiltonians.

> [!info] Time-Dependent Hamiltonians and Hamiltonian Isotopies
> Let $H:I\times M\to \mathbb{R}$ be a smooth function, written $H_t(\cdot):=H(t,\cdot)$.
> Define the time-dependent vector field $X_{H_t}$ by
> $$\iota_{X_{H_t}}\omega=dH_t.$$
> A smooth isotopy $\{\varphi_t\}_{t\in I}$ is called a **Hamiltonian isotopy**
> if it solves
> $$\dot{\varphi}_t = X_{H_t}\circ \varphi_t$$
> for some $H_t$.

> [!abstract] Hamiltonian Isotopies Are Symplectic
> If $\{\varphi_t\}$ is a Hamiltonian isotopy, then each $\varphi_t$ is a symplectomorphism.

> [!success] Proof
> As before,
> $$\frac{d}{dt}\varphi_t^*\omega=\varphi_t^*(\mathcal{L}_{X_{H_t}}\omega)=0,$$
> since $\mathcal{L}_{X_{H_t}}\omega=d(dH_t)=0$ for each $t$.
> Thus $\varphi_t^*\omega$ is independent of $t$ and equals $\omega$ at $t=0$.

> [!info] Hamiltonian Diffeomorphisms
> The group of **Hamiltonian diffeomorphisms** of $(M,\omega)$ is
> $$\mathrm{Ham}(M,\omega):=\{\varphi_1 \mid \varphi_t \ \text{is a Hamiltonian isotopy with } \varphi_0=\mathrm{id}\}.$$

> [!danger] Remark
> By construction, $\mathrm{Ham}(M,\omega)\subset \mathrm{Symp}(M,\omega)$.
> The difference between Hamiltonian and symplectic isotopies is again global and is invisible locally.

## Observables and Conservation Laws

A Hamiltonian flow acts on functions by pullback. The next identity is the basic "equation of motion".

> [!abstract] Time Evolution of Observables
> Let $H\in C^\infty(M)$ and let $\varphi_H^t$ be its (local) flow.
> For any $F\in C^\infty(M)$,
> $$\frac{d}{dt}\bigl(F\circ \varphi_H^t\bigr)= (dF)(X_H)\circ \varphi_H^t.$$

> [!success] Proof
> Differentiate along a trajectory $x(t)=\varphi_H^t(x_0)$:
> $$\frac{d}{dt}F(x(t))=dF(\dot{x}(t))=dF(X_H(x(t))).$$

> [!info] First Integral
> A function $F\in C^\infty(M)$ is a **first integral** (or **constant of motion**) for $H$
> if $F\circ \varphi_H^t$ is constant in $t$ wherever defined.

> [!danger] Remark
> The previous proposition shows that $F$ is a first integral exactly when $dF(X_H)=0$.
> Later we will rewrite $dF(X_H)$ as a Poisson bracket, which makes this criterion algebraic.

## The Poisson Bracket

> [!info] Poisson Bracket on a Symplectic Manifold
> For $F,G\in C^\infty(M)$, define
> $$\{F,G\}:=\omega(X_F,X_G).$$

> [!note] Equivalent Formulas
> For $F,G\in C^\infty(M)$,
> $$\{F,G\}=dF(X_G)=-\,dG(X_F).$$
> In particular,
> $$X_G[F]=\{F,G\}.$$

> [!success] Proof
> Since $\iota_{X_G}\omega=dG$, we have
> $$dG(X_F)=(\iota_{X_G}\omega)(X_F)=\omega(X_G,X_F)=-\omega(X_F,X_G)=-\{F,G\}.$$
> Similarly, $dF(X_G)=\omega(X_F,X_G)=\{F,G\}$.

> [!abstract] Basic Properties
> The Poisson bracket satisfies:
> - Bilinearity: $\{aF+bF',G\}=a\{F,G\}+b\{F',G\}$ (and similarly in the second slot).
> - Antisymmetry: $\{F,G\}=-\{G,F\}$.
> - Leibniz rule: $\{FG,H\}=F\{G,H\}+G\{F,H\}$ (and similarly in the second slot).

> [!success] Proof
> Bilinearity and antisymmetry are immediate from bilinearity and skew-symmetry of $\omega$. For the Leibniz rule, use **Equivalent Formulas**:
> $$\{FG,H\}=X_H[FG]=X_H[F]\cdot G+F\cdot X_H[G]=\{F,H\}G+F\{G,H\}.$$

> [!abstract] Jacobi Identity
> For all $F,G,H\in C^\infty(M)$,
> $$\{F,\{G,H\}\}+\{G,\{H,F\}\}+\{H,\{F,G\}\}=0.$$

> [!success] Proof
> First observe the following identity: for any $F,G$,
> $$[X_F,X_G] = -\,X_{\{F,G\}}.$$
> Indeed, since $X_F$ is symplectic, $\mathcal{L}_{X_F}\omega=0$, and using Cartan's formula,
> $$\iota_{[X_F,X_G]}\omega=\mathcal{L}_{X_F}(\iota_{X_G}\omega)-\iota_{X_G}(\mathcal{L}_{X_F}\omega)=\mathcal{L}_{X_F}(dG)=d(X_F[G]).$$
> By **Equivalent Formulas**, $X_F[G]=\{G,F\}=-\{F,G\}$, hence
> $$\iota_{[X_F,X_G]}\omega = d(-\{F,G\}) = -\,d\{F,G\}.$$
> By definition of Hamiltonian vector fields, this means $[X_F,X_G] = -X_{\{F,G\}}$.
> 
> Now let
> $$J:=\{F,\{G,H\}\}+\{G,\{H,F\}\}+\{H,\{F,G\}\}.$$
> Using the identity above and the Jacobi identity for the Lie bracket of vector fields, we get
> $$0=[X_F,[X_G,X_H]]+[X_G,[X_H,X_F]]+[X_H,[X_F,X_G]] = -X_J.$$
> Hence $X_J=0$, which implies $dJ=0$ (since $\iota_{X_J}\omega=dJ$). Thus $J$ is locally constant.
> 
> Finally, note that $J$ is a derivation in each argument because it is built from Poisson brackets,
> and Poisson brackets satisfy the Leibniz rule. In particular,
> $$J(F^2,G,H)=2F\cdot J(F,G,H).$$
> But the left-hand side is locally constant (being $J$ evaluated on some functions), while the right-hand side equals
> $2F$ times the locally constant function $J(F,G,H)$. If $F$ is not locally constant, this forces $J(F,G,H)=0$ on each
> connected component. Therefore $J\equiv 0$ and the Jacobi identity holds.

> [!danger] Remark
> The Jacobi identity shows that $(C^\infty(M),\{\cdot,\cdot\})$ is a Lie algebra, and the Leibniz rule shows it is a **Poisson algebra**. Symplectic manifolds are precisely the nondegenerate Poisson manifolds.

> [!abstract] Hamilton's Equation in Poisson Form
> Let $H\in C^\infty(M)$ and let $\varphi_H^t$ be its flow.
> Then for any $F\in C^\infty(M)$,
> $$\frac{d}{dt}\bigl(F\circ \varphi_H^t\bigr)=\{F,H\}\circ \varphi_H^t.$$
> In particular, $F$ is a first integral for $H$ iff $\{F,H\}=0$.

> [!success] Proof
> Combine the **Time Evolution of Observables** proposition with **Equivalent Formulas**, which gives $dF(X_H)=\{F,H\}$.

## Coordinate Formulas: $\mathbb{R}^{2n}$ and $T^*Q$

We now record the explicit formulas that recover classical Hamiltonian mechanics.
They will also serve as sanity checks for sign conventions.
(Once we prove Darboux's theorem later, these formulas will be valid **locally** on any symplectic manifold.)

> [!abstract] Hamiltonian Vector Fields on $(\mathbb{R}^{2n},\omega_0)$
> Let $(x_1,\dots,x_n,y_1,\dots,y_n)$ be the standard coordinates on $\mathbb{R}^{2n}$ and
> $\omega_0=\sum_{i=1}^n dx_i\wedge dy_i$.
> For $H\in C^\infty(\mathbb{R}^{2n})$, the Hamiltonian vector field is
> $$X_H=\sum_{i=1}^n \frac{\partial H}{\partial y_i}\frac{\partial}{\partial x_i}
> -\sum_{i=1}^n \frac{\partial H}{\partial x_i}\frac{\partial}{\partial y_i}.$$

> [!success] Proof
> Write $X_H=\sum_i a_i \partial_{x_i}+\sum_i b_i \partial_{y_i}$.
> Then
> $$\iota_{X_H}\omega_0=\sum_i \bigl(a_i\,dy_i-b_i\,dx_i\bigr).$$
> Equating this with $dH=\sum_i \frac{\partial H}{\partial x_i}dx_i+\sum_i \frac{\partial H}{\partial y_i}dy_i$
> yields $a_i=\frac{\partial H}{\partial y_i}$ and $-b_i=\frac{\partial H}{\partial x_i}$.

> [!abstract] Poisson Bracket in Canonical Coordinates
> On $(\mathbb{R}^{2n},\omega_0)$, for $F,G\in C^\infty(\mathbb{R}^{2n})$ one has
> $$\{F,G\}=\sum_{i=1}^n \frac{\partial F}{\partial x_i}\frac{\partial G}{\partial y_i}
> -\sum_{i=1}^n \frac{\partial F}{\partial y_i}\frac{\partial G}{\partial x_i}.$$

> [!success] Proof
> Using $\{F,G\}=dF(X_G)$ and the formula for $X_G$ from the previous proposition,
> $$\{F,G\}= \sum_i \frac{\partial F}{\partial x_i}\frac{\partial G}{\partial y_i}
> -\sum_i \frac{\partial F}{\partial y_i}\frac{\partial G}{\partial x_i}.$$

The same computation gives Hamilton's equations on cotangent bundles.

> [!abstract] Hamilton's Equations on $(T^*Q,\omega=d\lambda)$
> Let $Q$ be a smooth manifold with local coordinates $(q^1,\dots,q^n)$ and induced coordinates $(q^i,p_i)$ on $T^*Q$.
> With $\omega=\sum_i dq^i\wedge dp_i$, the Hamiltonian vector field of $H\in C^\infty(T^*Q)$ is
> $$X_H=\sum_{i=1}^n \frac{\partial H}{\partial p_i}\frac{\partial}{\partial q^i}
> -\sum_{i=1}^n \frac{\partial H}{\partial q^i}\frac{\partial}{\partial p_i}.$$
> Thus a trajectory $(q(t),p(t))$ of $X_H$ satisfies Hamilton's equations
> $$\dot{q}^i=\frac{\partial H}{\partial p_i},\qquad \dot{p}_i=-\frac{\partial H}{\partial q^i}.$$

> [!success] Proof
> Write $X_H=\sum_i a^i\partial_{q^i}+\sum_i b_i\partial_{p_i}$.
> As before,
> $$\iota_{X_H}\omega=\sum_i \bigl(a^i\,dp_i-b_i\,dq^i\bigr).$$
> Equating with $dH=\sum_i \frac{\partial H}{\partial q^i}dq^i+\sum_i \frac{\partial H}{\partial p_i}dp_i$
> gives $a^i=\frac{\partial H}{\partial p_i}$ and $b_i=-\frac{\partial H}{\partial q^i}$.

## Examples

> [!example] Translations and Linear Hamiltonians on $\mathbb{R}^{2n}$
> On $(\mathbb{R}^{2},\omega_0=dx\wedge dy)$, the Hamiltonian $H=y$ gives $X_H=\partial_x$ (translation in $x$),
> and $H=-x$ gives $X_H=\partial_y$ (translation in $y$).
> More generally, linear Hamiltonians generate translations, while quadratic Hamiltonians generate linear symplectic flows.

> [!example] Harmonic Oscillator
> On $(\mathbb{R}^{2},dx\wedge dy)$, let $H=\frac12(x^2+y^2)$.
> Then $X_H=y\,\partial_x-x\,\partial_y$, so the flow is rotation about the origin.
> The level sets of $H$ are circles, and $H$ is constant along its own flow.

> [!example] Geodesic Flow as a Hamiltonian Flow
> Let $(Q,g)$ be a Riemannian manifold. Consider $T^*Q$ with its canonical symplectic form.
> The kinetic energy Hamiltonian
> $$H(q,p)=\frac12\,|p|_g^2$$
> generates the (co)tangent-lifted geodesic flow. In local coordinates, Hamilton's equations reproduce the usual geodesic ODE
> (after using the metric to identify $T^*Q\simeq TQ$).
> We will treat this as a guiding example rather than develop the full metric formalism here.

> [!danger] Commuting Hamiltonians
> If $\{F,G\}=0$, then each function is preserved along the other's flow:
> $$\frac{d}{dt}(F\circ \varphi_G^t)=\{F,G\}\circ \varphi_G^t=0.$$
> In many integrable systems one seeks large families of pairwise Poisson-commuting first integrals.

> [!danger] Preview
> The Poisson algebra viewpoint is the bridge to geometry and topology:
> Hamiltonian diffeomorphisms, fixed points, and Lagrangian intersections are global objects, and Floer theory can be viewed as a way to extract robust invariants from these dynamics. For now, our main takeaway is the dictionary
> $$H \longleftrightarrow X_H,\quad \text{time evolution: } \dot{F}=\{F,H\},\quad \text{symmetries/first integrals: } \{F,H\}=0.$$


