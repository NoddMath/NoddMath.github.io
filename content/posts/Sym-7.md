+++
date = "2024-11-18T15:44:10-04:00"
draft = false
title = "Darboux Theorem"
categories = [ "Math" ]
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

Darboux's theorem is the decisive local statement of symplectic geometry: **all symplectic forms look the same in a neighborhood of any point**.
In particular, there are no local curvature-type invariants in symplectic geometry.
The proof is an application of Moser's method from the previous section.

## Statement and Immediate Consequences

> [!note] Darboux
> Let $(M,\omega)$ be a symplectic manifold of dimension $2n$ and let $p\in M$.
> Then there exist local coordinates $(x_1,\dots,x_n,y_1,\dots,y_n)$ on a neighborhood $U$ of $p$ such that
> $$\omega\big|_U=\sum_{i=1}^n dx_i\wedge dy_i.$$
> Equivalently, there exists a local diffeomorphism $\Phi:(U,p)\to (\mathbb{R}^{2n},0)$ such that
> $$\Phi^*\omega_0=\omega,\qquad \omega_0=\sum_{i=1}^n dx_i\wedge dy_i.$$

> [!danger] Remark
> Compare this with Riemannian geometry: metrics have local invariants (curvature), while symplectic forms do not.
> Thus any phenomenon that distinguishes symplectic manifolds must be global in nature.

> [!idea] Local Symplectic Frames
> Let $(M,\omega)$ be symplectic and let $p\in M$. There exists a local frame of vector fields
> $e_1,\dots,e_n,f_1,\dots,f_n$ on a neighborhood of $p$ such that
> $$\omega(e_i,e_j)=0=\omega(f_i,f_j),\qquad \omega(e_i,f_j)=\delta_{ij}.$$

> [!success] Proof
> Take Darboux coordinates and choose $e_i=\partial_{x_i}$ and $f_i=\partial_{y_i}$.

## A Relative Poincaré Lemma at a Point

To apply Moser's method, we need a primitive for the difference of two forms that vanishes at the base point.
The following lemma is a convenient way to organize this.

> [!note] Primitive Vanishing at a Point
> Let $U\subset \mathbb{R}^m$ be a star-shaped neighborhood of $0$ and let $\beta\in \Omega^k(U)$ be a closed form with $k\ge 1$.
> Then there exists $\alpha\in \Omega^{k-1}(U)$ such that
> $$d\alpha=\beta\qquad\text{and}\qquad \alpha_0=0.$$

> [!success] Proof
> This is a standard consequence of the Poincaré lemma on star-shaped domains.
> One concrete construction uses the radial vector field $R=\sum_{i=1}^m x_i\partial_{x_i}$ and the homotopy operator
> $$\alpha:=\int_0^1 \iota_R\bigl((\rho_t)^*\beta\bigr)\,\frac{dt}{t},\qquad \rho_t(x)=tx.$$
> A direct computation shows $d\alpha=\beta$. Moreover, $\alpha_0=0$ because $\iota_R$ vanishes at the origin.

> [!danger] Remark
> For Darboux's theorem we will apply this lemma to a **difference** of symplectic forms, which is closed.
> The vanishing condition at the base point is what ensures the Moser vector field vanishes there, so the resulting diffeomorphism fixes the point.

## Proof of Darboux via Moser

> [!success] Proof of Darboux
> Choose a coordinate chart $\psi:U\to \mathbb{R}^{2n}$ with $\psi(p)=0$.
> Transport $\omega$ to a $2$-form on $\psi(U)$ by setting
> $$\widetilde{\omega}:=(\psi^{-1})^*\omega.$$
> Then $\widetilde{\omega}$ is symplectic on $\psi(U)$ and $\widetilde{\omega}_0:=\widetilde{\omega}(0)$ is a nondegenerate skew form
> on $T_0\mathbb{R}^{2n}\cong \mathbb{R}^{2n}$. By linear symplectic algebra, there exists a linear isomorphism
> $A:\mathbb{R}^{2n}\to \mathbb{R}^{2n}$ such that
> $$A^*\omega_0=\widetilde{\omega}_0,$$
> where $\omega_0=\sum_{i=1}^n dx_i\wedge dy_i$ is the standard form. Replace $\psi$ by $A\circ \psi$.
> With this replacement, we may assume that
> $$\widetilde{\omega}(0)=\omega_0(0),\qquad\text{i.e.}\qquad \widetilde{\omega}_0=\omega_0\ \text{at the origin}.$$
>
> Now set $\beta:=\widetilde{\omega}-\omega_0$ on a small star-shaped neighborhood $V\subset \psi(U)$ of $0$.
> Then $\beta$ is a closed $2$-form (since both $\widetilde{\omega}$ and $\omega_0$ are closed), and $\beta(0)=0$.
> By **Primitive Vanishing at a Point**, there exists a $1$-form $\alpha$ on $V$ such that
> $$d\alpha=\beta\qquad\text{and}\qquad \alpha_0=0.$$
> For $t\in[0,1]$, define the family of $2$-forms
> $$\omega_t:=\omega_0+t\beta=\omega_0+t(\widetilde{\omega}-\omega_0).$$
> We have $\omega_0$ at $t=0$ and $\widetilde{\omega}$ at $t=1$.
> Moreover, shrinking $V$ if necessary, all $\omega_t$ are symplectic on $V$ because nondegeneracy is an open condition
> and $\omega_t(0)=\omega_0(0)$ for all $t$.
>
> Since $\dot{\omega}_t=\beta=d\alpha$, we are in the local Moser setup.
> Define a time-dependent vector field $X_t$ on $V$ by the Moser equation
> $$\iota_{X_t}\omega_t=-\alpha.$$
> Because $\omega_t$ is nondegenerate, $X_t$ exists and is smooth.
> Furthermore, $\alpha_0=0$ implies $X_t(0)=0$ for all $t$, hence the flow we construct will fix the origin.
>
> Let $\{\varphi_t\}$ be the local flow of $X_t$ with $\varphi_0=\mathrm{id}$.
> On a sufficiently small neighborhood of $0$, this flow exists for all $t\in[0,1]$.
> By the closed-form variation formula from the previous section,
> $$\frac{d}{dt}(\varphi_t^*\omega_t)=\varphi_t^*\bigl(\dot{\omega}_t + d(\iota_{X_t}\omega_t)\bigr)=\varphi_t^*\bigl(d\alpha+d(-\alpha)\bigr)=0.$$
> Thus $\varphi_t^*\omega_t$ is independent of $t$, and evaluating at $t=0$ yields
> $$\varphi_t^*\omega_t=\omega_0\quad\text{for all }t.$$
> In particular, at $t=1$ we obtain $\varphi_1^*\widetilde{\omega}=\omega_0$ on a neighborhood of $0$.
>
> Finally, define the desired Darboux chart by
> $$\Phi:=\varphi_1^{-1}\circ \psi:U'\to \mathbb{R}^{2n},$$
> where $U'\subset U$ is chosen so that $\psi(U')\subset V$ and $\varphi_1$ is defined on $\psi(U')$.
> Then
> $$\Phi^*\omega_0=(\psi^{-1})^*(\varphi_1^{-1})^*\omega_0=(\psi^{-1})^*\widetilde{\omega}=\omega,$$
> as claimed.

## Consequences: The Absence of Local Invariants

> [!idea] Local Uniqueness of Symplectic Forms
> Let $\omega$ and $\omega'$ be symplectic forms on a manifold $M$.
> If $\omega_p=\omega'_p$ as bilinear forms on $T_pM$ at a point $p\in M$, then there exists a neighborhood $U$ of $p$
> and a diffeomorphism $\phi:U\to U$ with $\phi(p)=p$ such that
> $$\phi^*\omega'=\omega\ \text{ on }U.$$

> [!success] Proof
> Apply Darboux's theorem to both $\omega$ and $\omega'$ at $p$ to obtain Darboux coordinate systems.
> In those coordinates, both forms become $\omega_0$, and composing the coordinate changes yields the required local diffeomorphism.

> [!danger] Remark
> The corollary says that the only local datum carried by a symplectic form is its value on the tangent space at a point,
> and even that value is unique up to linear symplectic changes of coordinates.
> Consequently, symplectic phenomena are global: they are encoded by topology (cohomology classes, characteristic classes),
> and by global dynamical constraints (periodic orbits, intersection patterns, etc.).

## A Useful Computational Corollary: Local Hamilton Equations

Since Darboux coordinates identify $\omega$ with $\omega_0$ locally, the coordinate formulas of the previous section apply locally.

> [!idea] Local Hamilton Equations
> Let $(M,\omega)$ be symplectic and let $p\in M$.
> In Darboux coordinates near $p$, for any Hamiltonian $H$ the Hamiltonian vector field is given by
> $$X_H=\sum_{i=1}^n \frac{\partial H}{\partial y_i}\frac{\partial}{\partial x_i}-\sum_{i=1}^n \frac{\partial H}{\partial x_i}\frac{\partial}{\partial y_i},$$
> and the Poisson bracket is
> $$\{F,G\}=\sum_{i=1}^n \frac{\partial F}{\partial x_i}\frac{\partial G}{\partial y_i}-\sum_{i=1}^n \frac{\partial F}{\partial y_i}\frac{\partial G}{\partial x_i}.$$

> [!success] Proof
> In Darboux coordinates, $\omega=\omega_0$ and the formulas follow from the coordinate computations already done for $\omega_0$.

> [!danger] Preview
> Darboux's theorem is the point where symplectic topology begins: local structure is completely rigid,
> so any interesting invariant must survive cutting and gluing, deformation, and global constraints.
> The next theorem (Weinstein's Lagrangian neighborhood theorem) is a relative version of Darboux,
> with a Lagrangian submanifold playing the role of the base point.




