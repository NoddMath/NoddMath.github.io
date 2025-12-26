+++
date = "2025-02-28T15:44:10-04:00"
draft = false
title = "Curvature: from Commutators to Tidal Forces (Jacobi Fields)"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

A good rule of thumb: whenever something refuses to commute, it is trying to tell you what the geometry is.
In flat space, partial derivatives commute and parallel transport around a loop brings you back unchanged.
In curved spacetime, covariant derivatives do **not** commute, and the “error term” is a tensor: curvature.

In GR this is not aesthetic accounting. Curvature is what your lab can actually measure without looking outside:
two nearby freely-falling particles either keep their separation or they do not. That relative acceleration is a curvature component in disguise.

## Riemann curvature as a commutator

Let $(M,g)$ be a time-oriented Lorentzian manifold with Levi-Civita connection $\nabla$.

> [!info] Curvature operator
> For vector fields $X,Y,Z\in C^\infty(TM)$, define
> $$R(X,Y)Z := \nabla_X\nabla_Y Z - \nabla_Y\nabla_X Z - \nabla_{[X,Y]}Z.$$
> This is $C^\infty(M)$-multilinear in $X,Y,Z$, hence defines a tensor of type $(1,3)$.

> [!info] Riemann tensor with indices
> Define the $(0,4)$-tensor
> $$R(X,Y,Z,W):= g(R(X,Y)Z,W).$$
> In local coordinates $(x^\mu)$ we write
> $$ (\nabla_\mu\nabla_\nu-\nabla_\nu\nabla_\mu)V^\rho = R^\rho{}_{\sigma\mu\nu}V^\sigma,\qquad R_{\rho\sigma\mu\nu} = g_{\rho\lambda}R^\lambda{}_{\sigma\mu\nu}. $$

> [!important] Sign conventions
> Some texts define $R$ with the opposite overall sign. The algebraic symmetries and the Bianchi identities are unchanged, but any formula that claims “$R_{0i0j}$ equals **this** tidal tensor” needs the convention stated above.

## Algebraic symmetries: what $R_{abcd}$ can possibly be

The curvature tensor is not an arbitrary $(0,4)$-tensor: it has rigid symmetries.

> [!abstract] Basic symmetries
> For all vector fields $X,Y,Z,W$,
> 1. $R(X,Y) = -R(Y,X)$, hence $R(X,Y,Z,W)=-R(Y,X,Z,W)$.
> 2. $R(X,Y,Z,W)=-R(X,Y,W,Z)$.
> 3. (Pair symmetry) $R(X,Y,Z,W)=R(Z,W,X,Y)$.
> 
> Equivalently, in indices:
> $$R_{ab cd} = -R_{ba cd} = -R_{ab dc} = R_{cd ab}.$$

> [!success] Proof
> (1) is immediate from the definition.
> 
> For (2) and (3), use metric-compatibility and torsion-freeness. A clean way is to note that for fixed $X,Y$, the endomorphism $R(X,Y):T_pM\to T_pM$ is skew-adjoint with respect to $g$:
> $$g(R(X,Y)Z,W) = - g(Z,R(X,Y)W),$$
> which is exactly (2). Pair symmetry (3) can then be obtained by combining (1), (2), and the first Bianchi identity below.

> [!note] First Bianchi identity
> For all vector fields $X,Y,Z$,
> $$R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0.$$
> In indices: $R_{a[bcd]}=0$, i.e.
> $$R_{abcd}+R_{acdb}+R_{adbc}=0.$$

> [!success] Proof
> Expand $R(X,Y)Z$ from the definition and sum cyclically. The $\nabla\nabla$ terms cancel by torsion-freeness, and the remaining bracket terms cancel by the Jacobi identity for $[\cdot,\cdot]$.

> [!note] Second Bianchi identity
> The covariant derivative of curvature satisfies
> $$\nabla_X R(Y,Z) + \nabla_Y R(Z,X) + \nabla_Z R(X,Y) = 0,$$
> equivalently, in indices,
> $$\nabla_{[a}R_{bc]de}=0.$$

> [!success] Proof
> Apply the commutator identity to $\nabla W$ and antisymmetrize over three vector fields. Because $\nabla$ is torsion-free and metric-compatible, the leftover terms reorganize into the stated cyclic sum.

> [!danger] Remark
> Contracting the second Bianchi identity eventually yields the **contracted Bianchi identity** $\nabla^a(G_{ab})=0$ for $G_{ab}=Ric_{ab}-\frac12 Rg_{ab}$, which is the geometric reason the Einstein equation enforces local stress-energy conservation. We will make this systematic in Part III.

## Curvature you can feel: Jacobi fields and geodesic deviation

A single freely-falling particle can always pretend gravity is absent (local inertial frame).
To **detect** gravity, you must compare at least two nearby free-fall worldlines.

> [!info] Geodesic variation and variation field
> A smooth map $\Gamma:(-\varepsilon,\varepsilon)\times I\to M$ is a **geodesic variation** if for each fixed $s$, the curve $t\mapsto \Gamma(s,t)$ is an affinely parametrized geodesic.
> Along the central geodesic $\gamma(t):=\Gamma(0,t)$ define vector fields
> $$V := \partial_t \Gamma\big|_{s=0},\qquad J := \partial_s \Gamma\big|_{s=0}.$$
> Here $V$ is the tangent field and $J$ is the **separation** (variation) field.

> [!info] Jacobi field
> Let $\gamma$ be an affinely parametrized geodesic with tangent $V=\dot\gamma$.
> A vector field $J$ along $\gamma$ is a **Jacobi field** if it satisfies
> $$\nabla_V\nabla_V J + R(J,V)V = 0.$$

> [!note] Geodesic deviation equation
> If $\Gamma$ is a geodesic variation, then the associated variation field $J$ along the base geodesic $\gamma$ is a Jacobi field:
> $$\nabla_V\nabla_V J + R(J,V)V = 0.$$

> [!success] Proof
> Because $\partial_s$ and $\partial_t$ commute on the parameter rectangle, we have $[J,V]=0$ along $\gamma$.
> Torsion-freeness gives $\nabla_J V=\nabla_V J$.
> Now use the curvature identity
> $$R(J,V)V = \nabla_J\nabla_V V - \nabla_V\nabla_J V - \nabla_{[J,V]}V.$$
> Each curve $t\mapsto \Gamma(s,t)$ is a geodesic, hence $\nabla_V V=0$. Also $[J,V]=0$.
> Therefore
> $$R(J,V)V = -\nabla_V\nabla_J V = -\nabla_V\nabla_V J,$$
> which is exactly the Jacobi equation.

> [!danger] Remark
> A Jacobi field tangent to $\gamma$ just reparametrizes the same geodesic and carries no tidal content.
> The physically interesting case is $J\perp V$, i.e. separation measured in the instantaneous rest space of the observer.

## The tidal operator and what an observer measures

Let $\gamma(\tau)$ be a timelike geodesic parametrized by proper time, with $u=\dot\gamma$ so $g(u,u)=-1$.
At each point, the observer's instantaneous rest space is
$$u^\perp := \{\,w\in T_{\gamma(\tau)}M : g(u,w)=0\,\},$$
on which $g$ is positive definite.

> [!info] Tidal operator along a timelike geodesic
> Define the linear map $F_u:u^\perp\to u^\perp$ by
> $$F_u(J):= R(J,u)u.$$
> For a Jacobi field $J$ with $J\perp u$, the deviation equation becomes
> $$\nabla_u\nabla_u J + F_u(J)=0.$$

> [!abstract] Self-adjointness and a Ricci trace
> For timelike $u$, the operator $F_u$ is self-adjoint with respect to the induced inner product on $u^\perp$.
> Moreover, with $\{e_i\}_{i=1}^3$ an orthonormal basis of $u^\perp$,
> $$\mathrm{tr}(F_u)=\sum_{i=1}^3 g(F_u(e_i),e_i) = -\,Ric(u,u).$$

> [!success] Proof
> Self-adjointness is the pair symmetry of curvature in disguise: for $J_1,J_2\in u^\perp$,
> $$g(F_u(J_1),J_2)=g(R(J_1,u)u,J_2)=R(J_1,u,u,J_2)=R(J_2,u,u,J_1)=g(F_u(J_2),J_1).$$
> For the trace, expand $Ric(u,u)=R(e_i,u,e_i,u)$ and use the sign conventions above together with $R(\cdot,\cdot,\cdot,\cdot)$ being skew in the last two slots.

> [!danger] Remark
> Later, Raychaudhuri's equation will tell us that focusing/defocusing of geodesic congruences is controlled by $Ric(u,u)$ (and similarly $Ric(k,k)$ for null $k$). This is where curvature meets energy conditions.

## Fermi normal coordinates: tidal acceleration in components

Choose Fermi normal coordinates $(x^0,x^1,x^2,x^3)$ along $\gamma(\tau)$ (Lecture 2.1), so that on $\gamma$:
$$\partial_0 = u,\qquad g_{\mu\nu}\big|_\gamma=\eta_{\mu\nu},\qquad \Gamma^\mu{}_{\alpha\beta}\big|_\gamma = 0.$$

> [!note] Measured tidal acceleration
> Let $J$ be the separation field between $\gamma$ and a neighboring freely-falling timelike geodesic, chosen so that $J^0=0$ along $\gamma$ (purely spatial separation in the observer's rest frame).
> Then along $\gamma$,
> $$\frac{d^2 J^i}{d\tau^2} = -\,R^i{}_{0j0}\,J^j.$$
> Thus the symmetric $3\times 3$ matrix $(R_{0i0j})$ is the observer's tidal tensor.

> [!success] Proof
> Along $\gamma$ in Fermi coordinates, $\nabla_u\nabla_u J$ reduces to ordinary second derivatives of the components because $\Gamma=0$ on $\gamma$. The Jacobi equation with $V=u=\partial_0$ becomes
> $$\frac{d^2 J^i}{d\tau^2} + R^i{}_{\nu\rho\sigma}J^\nu u^\rho u^\sigma = 0.$$
> Since $u^\rho=\delta^\rho{}_0$ and $J^\nu$ is spatial, the curvature term reduces to $R^i{}_{0j0}J^j$.

> [!danger] Remark
> In the weak-field, slow-motion limit, one finds $R_{0i0j}\approx \partial_i\partial_j\Phi$, so the equation above reduces to relative acceleration governed by the Hessian of the Newtonian potential. That is exactly what “tidal” means in freshman gravity, now written invariantly.

> [!danger] Zee-style thought
> In SR, you can argue about what is “really” happening by changing frames.
> In GR, you can still do that locally for a single observer, and you should.
> But the moment you track a **pair** of nearby free-fall trajectories, the argument stops being philosophical: the curvature tensor shows up as a number on the right-hand side of an equation of motion.
> That number is what stretches you, squeezes you, and (near a black hole) eventually teaches you humility.

