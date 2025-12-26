+++
date = "2025-02-24T15:44:10-04:00"
draft = false
title = "Levi-Civita Connection and Geodesics: Three Equivalent Characterizations"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

In Part I we met the free particle as a curve that extremizes proper time, and in Lecture 2.1 we learned how to erase gravity to first order by choosing local inertial frames. Now we build the engine that makes those statements coordinate-free: the Levi-Civita connection and geodesics.

The physics slogan is “free fall = straightest possible motion.” The mathematical question is: **what does “straightest” mean on a curved Lorentzian manifold?** It turns out there are three answers, and the point of this lecture is that they are the same answer.

## Levi-Civita connection: what we keep from Riemannian geometry

Let $(M,g)$ be a Lorentzian manifold, time-oriented, with signature $(-,+,+,+)$.

> [!note] Fundamental theorem of (pseudo-)Riemannian geometry
> There exists a unique connection $\nabla$ on $TM$ such that
> 1. **torsion-free**: $\nabla_X Y - \nabla_Y X = [X,Y]$ for all vector fields $X,Y$;
> 2. **metric-compatible**: $X(g(Y,Z)) = g(\nabla_X Y, Z)+g(Y,\nabla_X Z)$ for all $X,Y,Z$.
> 
> This $\nabla$ is the **Levi-Civita connection** of $g$.

> [!success] Proof
> Same as in the Riemannian case: the Koszul formula  
> $$2g(\nabla_X Y,Z)=Xg(Y,Z)+Yg(Z,X)-Zg(X,Y)-g(X,[Y,Z])+g(Y,[Z,X])+g(Z,[X,Y])$$  
> defines $\nabla$ uniquely and verifies torsion-freeness and metric-compatibility.

> [!danger] Remark
> Nothing in the existence/uniqueness uses positive definiteness. What changes in Lorentzian geometry is not the connection but the causal interpretation of the objects it differentiates.

In local coordinates $(x^\mu)$, the Christoffel symbols are still
$$\Gamma^\rho{}_{\mu\nu}=\frac12 g^{\rho\sigma}\bigl(\partial_\mu g_{\nu\sigma}+\partial_\nu g_{\mu\sigma}-\partial_\sigma g_{\mu\nu}\bigr),$$
and the covariant derivative of a vector field $V=V^\rho\partial_\rho$ is
$$(\nabla_\mu V)^\rho=\partial_\mu V^\rho + \Gamma^\rho{}_{\mu\sigma}V^\sigma.$$

## Geodesics as autoparallels: “parallel transport your velocity”

> [!info] Geodesic (autoparallel) equation
> A smooth curve $\gamma:I\to M$ is a **geodesic** if its tangent vector $u=\dot\gamma$ satisfies
> $$\nabla_u u = 0.$$
> If $\gamma$ is timelike, we typically parametrize it by proper time so that $g(u,u)=-1$.

> [!danger] Remark
> If $\gamma$ is a geodesic and $\lambda$ is an affine parameter, then in coordinates the equation reads
> $$\frac{d^2 x^\rho}{d\lambda^2}+\Gamma^\rho{}_{\mu\nu}\frac{dx^\mu}{d\lambda}\frac{dx^\nu}{d\lambda}=0.$$
> If you choose a non-affine parameter, a spurious term proportional to $dx^\rho/d\lambda$ appears. For timelike geodesics, proper time is the canonical affine parameter.

> [!abstract] Constant norm along affine geodesics
> If $\gamma$ satisfies $\nabla_u u=0$, then $g(u,u)$ is constant along $\gamma$.

> [!success] Proof
> Using metric compatibility,
> $$\frac{d}{d\lambda}g(u,u)=u\bigl(g(u,u)\bigr)=2g(\nabla_u u,u)=0.$$

## Geodesics from the action: extremizing proper time (or energy)

The variational viewpoint is the one we already met in Minkowski space, and it generalizes cleanly.

> [!info] Length and energy functionals
> Let $\gamma:[\lambda_1,\lambda_2]\to M$ be a smooth timelike curve. Define the proper time (Lorentzian length)
> $$\mathcal{T}[\gamma]:=\int_{\lambda_1}^{\lambda_2}\sqrt{-\,g(\dot\gamma,\dot\gamma)}\,d\lambda.$$
> If $\gamma$ is timelike, we may also consider the **energy functional**
> $$\mathcal{E}[\gamma]:=\frac12\int_{\lambda_1}^{\lambda_2} g(\dot\gamma,\dot\gamma)\,d\lambda,$$
> which differs from $\mathcal{T}$ by reparametrization issues but yields the same unparametrized geodesics.

> [!danger] Remark
> For Riemannian metrics, length minimizers are geodesics. For Lorentzian metrics, timelike geodesics are stationary points of $\mathcal{T}$, and in suitable circumstances they locally **maximize** $\mathcal{T}$. The action principle cares about stationarity; the “max vs min” story is global and depends on conjugate points.

> [!note] Geodesics as stationary curves of proper time
> Let $\gamma$ be a smooth timelike curve with fixed endpoints. If $\gamma$ is a stationary point of $\mathcal{T}$, then (after reparametrization by proper time) it satisfies the geodesic equation $\nabla_{\dot\gamma}\dot\gamma=0$. Conversely, any timelike geodesic parametrized by proper time is stationary for $\mathcal{T}$.

> [!success] Proof
> Write the Lagrangian
> $$L(x,\dot x)=\sqrt{-\,g_{\mu\nu}(x)\dot x^\mu\dot x^\nu}.$$
> Stationarity gives the Euler--Lagrange equations
> $$\frac{d}{d\lambda}\left(\frac{\partial L}{\partial \dot x^\rho}\right)-\frac{\partial L}{\partial x^\rho}=0.$$
> A standard computation yields
> $$\frac{\partial L}{\partial \dot x^\rho} = -\frac{g_{\rho\nu}\dot x^\nu}{\sqrt{-g(\dot x,\dot x)}},\qquad
> \frac{\partial L}{\partial x^\rho} = -\frac{1}{2\sqrt{-g(\dot x,\dot x)}}\,\partial_\rho g_{\mu\nu}\dot x^\mu\dot x^\nu.$$
> Multiplying the Euler--Lagrange equation by $\sqrt{-g(\dot x,\dot x)}$ and using the identity
> $$\frac{d}{d\lambda}(g_{\rho\nu}\dot x^\nu)=g_{\rho\nu}\ddot x^\nu + \partial_\mu g_{\rho\nu}\dot x^\mu \dot x^\nu,$$
> one arrives at
> $$\ddot x^\sigma + \Gamma^\sigma{}_{\mu\nu}\dot x^\mu\dot x^\nu = f(\lambda)\dot x^\sigma,$$
> where $f$ is a scalar function encoding the non-affine parametrization (this is the reparametrization invariance at work).
> If $\lambda$ is chosen so that $g(\dot x,\dot x)$ is constant (in particular, for proper time on a timelike curve), then $f\equiv 0$ and the equation becomes the geodesic equation with affine parameter.
> The converse is verified by running the first-variation computation for $\mathcal{T}$ and using $\nabla g=0$.

## Geodesics as locally inertial motion: a self-consistency argument

Here is the most “physics” definition of a geodesic, and it is the one that makes the equivalence principle precise.

> [!info] Geodesics as free fall (local inertial characterization)
> A timelike curve $\gamma$ describes **free fall** if around every point $p=\gamma(\tau_0)$ there exist local coordinates in which, at $p$,
> $$g_{\mu\nu}(p)=\eta_{\mu\nu},\qquad \partial_\alpha g_{\mu\nu}(p)=0,$$
> and in which $\gamma$ has zero coordinate acceleration at $p$:
> $$\frac{d^2 x^\mu}{d\tau^2}\Big|_{\tau_0}=0.$$

> [!abstract] Free fall $\Longleftrightarrow$ geodesic
> A smooth timelike curve is free fall in the above local-inertial sense if and only if it is a timelike geodesic.

> [!success] Proof
> ($\Rightarrow$) In any coordinates, the acceleration vector is
> $$(\nabla_{\dot\gamma}\dot\gamma)^\mu = \frac{d^2 x^\mu}{d\tau^2} + \Gamma^\mu{}_{\alpha\beta}\frac{dx^\alpha}{d\tau}\frac{dx^\beta}{d\tau}.$$
> In local inertial coordinates at $p$, $\Gamma(p)=0$ (Lecture 2.1) and $d^2x^\mu/d\tau^2|_p=0$ by assumption, hence $\nabla_{\dot\gamma}\dot\gamma=0$ at $p$. Since $p$ was arbitrary, $\gamma$ is a geodesic.
>
> ($\Leftarrow$) If $\gamma$ is a geodesic, choose Fermi normal coordinates along it (Lecture 2.1). On $\gamma$, all Christoffel symbols vanish and $\gamma$ is $x^i=0$, hence $d^2 x^\mu/d\tau^2=0$ along the curve. Thus $\gamma$ is locally inertial at each point.

> [!danger] Remark
> This is the conceptual punchline: the equivalence principle demands that a freely falling observer can regard herself as inertial **to first order**. The geometric implementation of “to first order” is $\Gamma=0$ on the worldline, and that is exactly the geodesic condition.

## Parallel transport: what it preserves and why it matters

> [!info] Parallel transport along a curve
> Let $\gamma:I\to M$ be smooth. A vector field $V$ along $\gamma$ is **parallel** if
> $$\nabla_{\dot\gamma}V=0.$$

> [!abstract] Metric preservation under parallel transport
> If $V$ and $W$ are parallel along $\gamma$, then $g(V,W)$ is constant along $\gamma$. In particular, $g(V,V)$ is constant.

> [!success] Proof
> Using metric compatibility,
> $$\frac{d}{d\lambda}g(V,W)=\dot\gamma\bigl(g(V,W)\bigr)=g(\nabla_{\dot\gamma}V,W)+g(V,\nabla_{\dot\gamma}W)=0.$$

> [!danger] Remark
> This is why orthonormal frames can be parallel transported along geodesics (as we used to build Fermi coordinates). In physics terms: gyroscopes define a transport law, and in GR the “no-torque” transport is precisely parallel transport.

## Killing fields and conserved quantities: the Schwarzschild/Kerr toolbox

In curved spacetime, global translation symmetry is gone in general. What survives are **isometries**. A Killing field is the infinitesimal generator of an isometry.

> [!info] Killing vector field
> A vector field $K$ on $(M,g)$ is a **Killing field** if
> $$\mathcal{L}_K g = 0.$$
> Equivalently,
> $$\nabla_a K_b + \nabla_b K_a = 0.$$

> [!abstract] Conservation law from a Killing field
> Let $\gamma(\lambda)$ be an affinely parametrized geodesic with tangent $u=\dot\gamma$. If $K$ is a Killing field, then the scalar
> $$\mathcal{C}_K := g(K,u)$$
> is constant along $\gamma$:
> $$\frac{d}{d\lambda}g(K,u)=0.$$

> [!success] Proof
> Differentiate and use the geodesic equation:
> $$\frac{d}{d\lambda}g(K,u)=g(\nabla_u K,u)+g(K,\nabla_u u)=g(\nabla_u K,u).$$
> Now symmetrize:
> $$g(\nabla_u K,u)=u^a u^b \nabla_a K_b=\frac12 u^a u^b (\nabla_a K_b + \nabla_b K_a)=0$$
> by the Killing equation.

> [!danger] Remark
> If $K$ is timelike in a region, it represents a time-translation symmetry there and $-g(K,u)$ is an energy per unit mass. If $K$ is spacelike with closed orbits (an axial symmetry), $g(K,u)$ is an angular momentum component. This is exactly what we will exploit in Schwarzschild and Kerr, where the geometry is built to have Killing fields.

> [!abstract] Killing fields and Noether: the particle-action viewpoint
> Consider the free-particle action
> $$S[\gamma]=-\!m\int \sqrt{-g(\dot\gamma,\dot\gamma)}\,d\lambda.$$
> If $K$ is a Killing field, then the infinitesimal variation $\delta x^\mu = \epsilon K^\mu$ is a symmetry of the action, and the corresponding Noether charge is $p_\mu K^\mu$, which reduces (for proper-time parametrization) to $m\,g(K,u)$.

> [!success] Proof
> Under $\delta x^\mu=\epsilon K^\mu$, the metric variation induced is $\delta g = \epsilon \mathcal{L}_K g=0$, so the Lagrangian is invariant. The canonical momentum is $p_\mu=\partial L/\partial \dot x^\mu$ and hence Noether's theorem gives conservation of $p_\mu K^\mu$. In proper time gauge $p_\mu = m u_\mu$, so $p_\mu K^\mu = m g(K,u)$.

> [!example] Two conserved quantities you will see constantly
> Let $(M,g)$ be stationary and axisymmetric, with Killing fields $T$ (timelike in the exterior) and $\Phi$ (axial). For a timelike geodesic with 4-velocity $u$, define
> $$E := -g(T,u),\qquad L := g(\Phi,u).$$
> Then $E$ and $L$ are constants of motion along the geodesic. In Schwarzschild, these are energy and angular momentum per unit mass; in Kerr they remain the first two entries in the conserved-quantity toolkit (with a third, Carter's constant, appearing from a hidden symmetry).
