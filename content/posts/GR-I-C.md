+++
date = "2025-04-06T15:44:10-04:00"
draft = false
title = "Worldlines, Proper Time, and Relativistic Kinematics"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++
## Guiding idea: motion is geometry, but clocks choose the parameter

In Phase I.A we treated Minkowski spacetime as an affine Lorentzian space and defined proper time as the geometric quantity measured by an ideal clock. In this lecture we turn that static geometry into *kinematics*: how to describe motion (worldlines), how to read physical observables from them (time dilation, energies as bookkeeping devices), and how to separate what is *coordinate-dependent* (a given inertial frame’s time $t$ and spatial velocity $\vec v$) from what is *invariant* (proper time $\tau$, four-velocity $U$, and four-acceleration $A$). We also introduce the canonical non-inertial observers in Minkowski spacetime (Rindler observers), which already foreshadow horizons and causal structure in black hole spacetimes.

Throughout we work in Minkowski spacetime $(\mathbb{M}^{1,3},\eta)$ with signature $(-,+,+,+)$ and units $c=1$.

## I.C.1 Worldlines, proper time, and four-velocity

> [!info] Worldline And Causal Character
> A *worldline* is a $C^1$ curve $\gamma:I\to \mathbb{M}^{1,3}$, where $I\subset\mathbb{R}$ is an interval. It is *timelike* (resp. null, spacelike) if $\dot\gamma(\lambda)$ is timelike (resp. null, spacelike) for all $\lambda\in I$. A *(physical) observer* is modeled by a future-directed timelike worldline.

> [!info] Proper Time Revisited
> Let $\gamma:[\lambda_0,\lambda_1]\to\mathbb{M}^{1,3}$ be a future-directed timelike $C^1$ curve. Its *proper time* is
> $$\tau(\gamma) \coloneqq \int_{\lambda_0}^{\lambda_1}\sqrt{-\,\eta(\dot\gamma(\lambda),\dot\gamma(\lambda))}\,d\lambda.$$
> If $x^\mu(\lambda)$ are inertial coordinates along $\gamma$, then
> $$\tau(\gamma)=\int \sqrt{\Bigl(\frac{dt}{d\lambda}\Bigr)^2-\Bigl\|\frac{d\vec x}{d\lambda}\Bigr\|^2}\,d\lambda.$$

The physical content is that an ideal clock carried along $\gamma$ records precisely this $\tau$; in particular, $\tau$ is invariant under Lorentz transformations because the integrand is built from $\eta$.

> [!abstract] Reparametrization By Proper Time
> Let $\gamma:I\to\mathbb{M}^{1,3}$ be future-directed timelike $C^1$. Then there exists a strictly increasing $C^1$ reparametrization $\lambda=\lambda(\tau)$ such that, with respect to the parameter $\tau$,
> $$-\eta\Bigl(\frac{d\gamma}{d\tau},\frac{d\gamma}{d\tau}\Bigr)=1.$$
> Such a parameter $\tau$ is unique up to affine transformations $\tau\mapsto \tau+\mathrm{const}$.

> [!success] Proofs
> Define
> > $$\tau(\lambda)\coloneqq \int_{\lambda_0}^{\lambda}\sqrt{-\eta(\dot\gamma(s),\dot\gamma(s))}\,ds.$$
> Because $\gamma$ is timelike, the integrand is positive, so $\tau(\lambda)$ is strictly increasing and $C^1$. Using the chain rule, with $\gamma(\tau)=\gamma(\lambda(\tau))$ we get
> > $$\frac{d\gamma}{d\tau}=\frac{d\gamma}{d\lambda}\frac{d\lambda}{d\tau},\qquad -\eta\Bigl(\frac{d\gamma}{d\tau},\frac{d\gamma}{d\tau}\Bigr)=-\eta(\dot\gamma,\dot\gamma)\Bigl(\frac{d\lambda}{d\tau}\Bigr)^2=1,$$
> since $d\tau/d\lambda=\sqrt{-\eta(\dot\gamma,\dot\gamma)}$ by construction. Uniqueness up to translation follows from the fact that the condition $-\eta(d\gamma/d\tau,d\gamma/d\tau)=1$ fixes $d\tau$ along the curve.

> [!info] Four-Velocity
> If $\gamma$ is parametrized by proper time $\tau$, its *four-velocity* is
> > $$U \coloneqq \frac{d\gamma}{d\tau}.$$
> Then $U$ is future-directed timelike and satisfies the normalization
> > $$\eta(U,U)=-1.$$

> [!danger] What $U$ packages
> The four-velocity is the invariant way to say “how the observer moves”. If you specify an inertial frame and write $\gamma(\tau)=(t(\tau),\vec x(\tau))$, then $U$ packages both the coordinate time rate $dt/d\tau$ and the spatial velocity $d\vec x/dt$. The normalization $\eta(U,U)=-1$ is the geometric constraint that “massive observers move inside the light cone”.

### Coordinate velocity and the Lorentz factor

Pick an inertial frame $(t,\vec x)$ and assume $t$ is strictly increasing along $\gamma$ (true for future-directed timelike curves). Define the coordinate velocity
$$
\vec v(t)\coloneqq \frac{d\vec x}{dt}.
$$
Then $\|\vec v(t)\|<1$ is precisely the statement that the worldline is timelike.

> [!abstract] Four-Velocity In Terms Of $\vec v$
> Let $\gamma(\tau)=(t(\tau),\vec x(\tau))$ be a timelike worldline parametrized by proper time. Define $\vec v=\frac{d\vec x}{dt}$ and the Lorentz factor
> > $$\gamma \coloneqq \frac{dt}{d\tau}.$$
> Then
> > $$U=\frac{d\gamma}{d\tau}=\Bigl(\frac{dt}{d\tau},\frac{d\vec x}{d\tau}\Bigr)=\bigl(\gamma,\gamma \vec v\bigr),\qquad \gamma=\frac{1}{\sqrt{1-\|\vec v\|^2}}.$$

> [!success] Proofs
> By definition, $U^0=dt/d\tau$ and $U^{\mathrm{spatial}}=d\vec x/d\tau=(d\vec x/dt)(dt/d\tau)=\vec v\,\gamma$. Using $\eta(U,U)=-1$ with $\eta=-dt^2+d\vec x^{\,2}$ yields
> > $$-1=\eta(U,U)=-(U^0)^2+\|U^{\mathrm{spatial}}\|^2=-\gamma^2+\gamma^2\|\vec v\|^2=-\gamma^2(1-\|\vec v\|^2),$$
> hence $\gamma=1/\sqrt{1-\|\vec v\|^2}$.

> [!danger] Time dilation as $\gamma=dt/d\tau$
> The formula $dt/d\tau=\gamma\ge 1$ makes the time-dilation statement almost tautological: for a moving observer, the inertial frame’s coordinate time $t$ elapses faster than the moving clock’s proper time $\tau$. What matters is not “mysterious slowing of time”: it is that different observers use different natural parameters along their worldlines.

## I.C.1' Four-acceleration and what an accelerometer measures

In Newtonian mechanics, “acceleration” is frame-dependent and not invariantly defined on spacetime. In relativity, there is an invariant replacement: *four-acceleration*. Physically, a good accelerometer carried by the observer measures its magnitude, called *proper acceleration*. Free-fall corresponds to zero proper acceleration.

> [!info] Four-Acceleration
> Let $\nabla$ be the Levi–Civita connection of $(\mathbb{M}^{1,3},\eta)$. For a timelike worldline $\gamma(\tau)$ parametrized by proper time, define the *four-acceleration*
> > $$A \coloneqq \nabla_U U.$$

> [!danger] In Minkowski: $\nabla$ is trivial in inertial coordinates
> In inertial coordinates, the Christoffel symbols vanish and $\nabla$ is just ordinary differentiation of components. Thus along $\gamma(\tau)$ one may compute
> > $$A^\mu=\frac{dU^\mu}{d\tau}.$$
> This is special to flat Minkowski spacetime and to inertial coordinates; in curved spacetime, $A$ remains the correct definition but its coordinate expression involves Christoffel symbols.

> [!abstract] Orthogonality
> Along any proper-time parametrized timelike worldline,
> > $$\eta(A,U)=0.$$

> [!success] Proofs
> Differentiate the identity $\eta(U,U)=-1$ along the curve:
> > $$0=\frac{d}{d\tau}\eta(U,U)=2\,\eta(\nabla_U U, U)=2\,\eta(A,U),$$
> using metric compatibility of $\nabla$.

> [!info] Proper Acceleration
> The *proper acceleration* is the nonnegative scalar
> > $$\alpha \coloneqq \sqrt{\eta(A,A)}.$$

> [!danger] Physical meaning
> The magnitude $\alpha$ is what an onboard accelerometer reads. In particular:
> 1. $\alpha=0$ means the observer is in inertial motion (free particle, no felt acceleration).
> 2. $\alpha\neq 0$ means the observer is non-inertial (a rocket firing, a person standing on a floor, etc.).
>
> This will be the conceptual bridge to general relativity: “free-fall” becomes “timelike geodesic” in curved spacetime.

### Relating four-acceleration to three-acceleration

Let $\vec a=\frac{d\vec v}{dt}$ be the coordinate three-acceleration in a chosen inertial frame. The relation between $A$ and $\vec a$ is a standard but extremely useful computation.

> [!abstract] Components Of $A$ In Terms Of $\vec v,\vec a$
> Let $U=(\gamma,\gamma\vec v)$ with $\gamma=(1-\|\vec v\|^2)^{-1/2}$ and $\vec a=d\vec v/dt$. Then
> > $$A=\Bigl(\gamma^4\,\vec v\cdot \vec a,\ \gamma^2\vec a+\gamma^4(\vec v\cdot\vec a)\,\vec v\Bigr),$$
> and hence
> > $$\alpha^2=\eta(A,A)=\gamma^6\,\|\vec a_{\parallel}\|^2+\gamma^4\,\|\vec a_{\perp}\|^2,$$
> where $\vec a_\parallel$ and $\vec a_\perp$ are the components of $\vec a$ parallel and perpendicular to $\vec v$.

> [!success] Proofs
> Differentiate $U=(\gamma,\gamma\vec v)$ with respect to $\tau$. First note that
> > $$\frac{d}{d\tau}=\frac{dt}{d\tau}\frac{d}{dt}=\gamma\,\frac{d}{dt}.$$
> Next compute $d\gamma/dt$. Since $\gamma=(1-\|\vec v\|^2)^{-1/2}$,
> > $$\frac{d\gamma}{dt}=\frac12(1-\|\vec v\|^2)^{-3/2}\cdot 2\,\vec v\cdot\vec a=\gamma^3\,\vec v\cdot\vec a.$$
> Therefore
> > $$A^0=\frac{d\gamma}{d\tau}=\gamma\frac{d\gamma}{dt}=\gamma^4\,\vec v\cdot\vec a,$$
> and for the spatial part,
> > $$\frac{d}{d\tau}(\gamma\vec v)=\gamma\frac{d}{dt}(\gamma\vec v)=\gamma\Bigl(\frac{d\gamma}{dt}\vec v+\gamma\vec a\Bigr)=\gamma^4(\vec v\cdot\vec a)\vec v+\gamma^2\vec a,$$
> which yields the stated component formula.
>
> For the proper acceleration identity, decompose $\vec a=\vec a_\parallel+\vec a_\perp$ with $\vec a_\parallel\parallel \vec v$ and $\vec a_\perp\perp \vec v$, and compute using $\eta(A,A)=-(A^0)^2+\|A^{\mathrm{spatial}}\|^2$. One finds
> > $$\|A^{\mathrm{spatial}}\|^2=\gamma^4\|\vec a_\perp\|^2+\gamma^8\|\vec a_\parallel\|^2,\qquad (A^0)^2=\gamma^8\|\vec v\|^2\|\vec a_\parallel\|^2,$$
> so
> > $$\alpha^2=\eta(A,A)=\gamma^4\|\vec a_\perp\|^2+\gamma^6\|\vec a_\parallel\|^2.$$

> [!danger] Two useful special cases
> 1. If $\vec a\perp \vec v$ (purely transverse acceleration), then $\alpha=\gamma^2\|\vec a\|$.
> 2. If $\vec a\parallel \vec v$ (purely longitudinal acceleration), then $\alpha=\gamma^3\|\vec a\|$.
>
> These scaling laws explain why ultra-relativistic acceleration is “hard” in coordinate time.

## I.C.2 The geodesic principle in flat spacetime

A central physical statement is: *a free massive particle moves inertially*. In Minkowski spacetime this has two equivalent mathematical forms:
1. the worldline is a timelike geodesic, hence a straight line in inertial coordinates;
2. among all timelike curves with the same endpoints, the free worldline extremizes (indeed maximizes) proper time.

### Geodesics in Minkowski space are straight lines

> [!abstract] Minkowski Geodesics
> Let $\gamma(\tau)$ be a timelike curve parametrized by proper time. Then $\gamma$ is a geodesic ($\nabla_U U=0$) if and only if $U$ is constant, i.e. $dU^\mu/d\tau=0$ in inertial coordinates. Equivalently, in inertial coordinates,
> > $$x^\mu(\tau)=a^\mu \tau+b^\mu,$$
> for constants $a^\mu,b^\mu$ with $\eta(a,a)=-1$.

> [!success] Proofs
> In inertial coordinates, $\nabla$ is the usual derivative and $A^\mu=dU^\mu/d\tau$. Thus $\nabla_U U=0$ iff $U$ is constant. Integrating $U^\mu=dx^\mu/d\tau=a^\mu$ gives $x^\mu(\tau)=a^\mu\tau+b^\mu$. The condition $\eta(a,a)=-1$ is exactly the normalization $\eta(U,U)=-1$.

### Variational principle: free particles extremize proper time

There is a deeper reason geodesics appear: the free particle action is built from proper time.

> [!info] Free Particle Action
> Let $\gamma:[\lambda_0,\lambda_1]\to\mathbb{M}^{1,3}$ be a timelike $C^1$ curve with fixed endpoints. The *free particle action* is
> > $$S[\gamma]\coloneqq -m\int_{\lambda_0}^{\lambda_1}\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda=-m\,\tau(\gamma),$$
> where $m>0$ is the particle’s rest mass.

> [!danger] Reparametrization invariance
> The functional $S[\gamma]$ depends only on the image of $\gamma$ and the time orientation, not on the chosen parameter. This invariance is physically natural (the particle does not come with a preferred coordinate parameter) and mathematically important (it implies the Euler–Lagrange equations have a constraint/degeneracy).

To compute the equations of motion, it is convenient to work in inertial coordinates and vary the coordinate functions $x^\mu(\lambda)$ with fixed endpoints. Let $L(x,\dot x)\coloneqq \sqrt{-\eta_{\mu\nu}\dot x^\mu\dot x^\nu}$, so $S[\gamma]=-m\int L\,d\lambda$.

> [!abstract] Euler–Lagrange Equations For The Free Particle
> Critical points of $S[\gamma]$ among timelike curves with fixed endpoints satisfy
> > $$\frac{d}{d\lambda}\left(\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta_{\alpha\beta}\dot x^\alpha\dot x^\beta}}\right)=0,$$
> i.e. the quantity
> > $$\Pi_\mu \coloneqq \frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta(\dot x,\dot x)}}$$
> is constant along the curve. If, in addition, $\lambda=\tau$ is proper time, then this reduces to
> > $$\frac{d^2 x^\mu}{d\tau^2}=0.$$

> [!success] Proofs
> Since $L$ does not depend on $x$ explicitly (only on $\dot x$), the Euler–Lagrange equations are $\frac{d}{d\lambda}\left(\frac{\partial L}{\partial \dot x^\mu}\right)=0$. Compute
> > $$\frac{\partial L}{\partial \dot x^\mu}=\frac{1}{2}\bigl(-\eta_{\alpha\beta}\dot x^\alpha\dot x^\beta\bigr)^{-1/2}\cdot (-2)\eta_{\mu\nu}\dot x^\nu=\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta_{\alpha\beta}\dot x^\alpha\dot x^\beta}},$$
> which yields the stated Euler–Lagrange system. If $\lambda=\tau$ is proper time, then $-\eta(\dot x,\dot x)=1$, so the equation becomes $d(\eta_{\mu\nu} \dot x^\nu)/d\tau=0$, i.e. $d^2x^\mu/d\tau^2=0$.

> [!danger] Geodesic equation in disguise
> The equation $d^2x^\mu/d\tau^2=0$ is the geodesic equation in inertial coordinates. In curved spacetime one replaces $\eta$ by $g$ and ordinary derivatives by covariant derivatives; the same action produces $\nabla_U U=0$. This is the clean variational origin of the geodesic principle.

### Maximization of proper time

> [!note] Inertial motion maximizes proper time
> Let $p\ll q$ in Minkowski spacetime. Among all future-directed piecewise $C^1$ timelike curves from $p$ to $q$, the proper time is maximized uniquely by the inertial worldline (straight timelike segment).

> [!danger] Physics reading: why acceleration costs proper time
> A non-inertial path corresponds to changing $U$, hence producing nonzero four-acceleration and (in general) a smaller proper-time integral. This is the geometric heart of the twin paradox. The “cause” is not an abstract symmetry breaking: it is the concrete fact that proper time is a functional of the entire worldline.

## I.C.3 Relative velocity, rapidity, and velocity addition

The phrase “an object moves with velocity $\vec v$” is incomplete without specifying *relative to which observer*. In relativity, the clean invariant data are: observer four-velocity $u$ and particle four-velocity $U$ at a point. From these two vectors one extracts the physically measured relative speed.

### Relative gamma as an inner product

> [!abstract] Relative gamma factor
> Let $u$ and $U$ be future-directed unit timelike vectors in $(V,\eta)$, so $\eta(u,u)=\eta(U,U)=-1$. Then
> > $$\gamma_{\mathrm{rel}} \coloneqq -\eta(u,U)\ge 1.$$
> Moreover, there exists a unique vector $v\in u^\perp$ such that
> > $$U=\gamma_{\mathrm{rel}}(u+v),\qquad \eta(u,v)=0,$$
> and $\|v\|_u^2\coloneqq \eta(v,v)$ satisfies
> > $$\|v\|_u^2 = 1-\frac{1}{\gamma_{\mathrm{rel}}^2}<1.$$

> [!success] Proofs
> Set $\gamma_{\mathrm{rel}}=-\eta(u,U)$. Since $u,U$ are future-directed timelike unit vectors, the hyperbolic Cauchy–Schwarz inequality yields $-\eta(u,U)\ge 1$, hence $\gamma_{\mathrm{rel}}\ge 1$. Define
> > $$v\coloneqq \frac{1}{\gamma_{\mathrm{rel}}}U-u.$$
> Then $\eta(u,v)=\frac{1}{\gamma_{\mathrm{rel}}}\eta(u,U)-\eta(u,u)=-1+1=0$, so $v\in u^\perp$ and $U=\gamma_{\mathrm{rel}}(u+v)$. Now compute $\eta(U,U)=-1$:
> > $$-1=\eta(U,U)=\gamma_{\mathrm{rel}}^2\eta(u+v,u+v)=\gamma_{\mathrm{rel}}^2(-1+\eta(v,v)),$$
> hence $\eta(v,v)=1-1/\gamma_{\mathrm{rel}}^2$. Uniqueness follows from the orthogonal decomposition $V=\mathrm{span}\{u\}\oplus u^\perp$.

> [!danger] Physical interpretation
> Given an observer with four-velocity $u$, the vector $v\in u^\perp$ is exactly the *spatial velocity measured by the observer*. The formula $\gamma_{\mathrm{rel}}=-\eta(u,U)$ gives an invariant way to compute time dilation between two observers without coordinates. In an inertial frame where $u=(1,0,0,0)$, it reduces to $\gamma_{\mathrm{rel}}=U^0$ and $v$ reduces to the ordinary $\vec v$.

> [!idea] Rapidity as hyperbolic angle
> For future-directed unit timelike $u,U$, define $\phi\ge 0$ by $\cosh\phi = -\eta(u,U)$. Then $\phi$ is the (unique) rapidity between the corresponding inertial observers, and the relative speed satisfies $\|v\|_u=\tanh\phi$.

> [!success] Proofs
> Set $\gamma_{\mathrm{rel}}=-\eta(u,U)=\cosh\phi$. Then $\|v\|_u^2=1-1/\cosh^2\phi=\tanh^2\phi$.

### Velocity addition (colinear case)

> [!abstract] Colinear velocity addition
> Let $v_1,v_2\in(-1,1)$ be colinear velocities (in $1+1$ dimensions for simplicity). If $v_k=\tanh\phi_k$, then the composed boost has rapidity $\phi_1+\phi_2$ and velocity
> > $$v_{\mathrm{tot}}=\tanh(\phi_1+\phi_2)=\frac{v_1+v_2}{1+v_1v_2}.$$

> [!success] Proofs
> This is exactly the hyperbolic tangent addition identity and matches the boost composition law from I.B.

> [!danger] Newtonian limit
> If $|v_1|,|v_2|\ll 1$, then $1+v_1v_2\approx 1$ and $v_{\mathrm{tot}}\approx v_1+v_2$, recovering Galilean velocity addition at low speeds. This is the sense in which special relativity contains Newtonian kinematics as a first approximation.

## I.C.4 Non-inertial observers: constant proper acceleration and Rindler geometry

In Minkowski spacetime, inertial motion is “straight” and has $A=0$. Non-inertial motion is encoded by $A\neq 0$ and measured by proper acceleration $\alpha=\sqrt{\eta(A,A)}$. A canonical family of non-inertial observers are those with *constant proper acceleration*: they model an ideal rocket that keeps its onboard accelerometer reading fixed.

### Hyperbolic motion in $1+1$ dimensions

We first work in $1+1$ dimensions with coordinates $(t,x)$ and metric $\eta=-dt^2+dx^2$.

> [!info] Constant proper acceleration in $1+1$
> A timelike worldline $\gamma(\tau)=(t(\tau),x(\tau))$ parametrized by proper time has *constant proper acceleration $a>0$* if
> > $$\eta(A,A)=a^2,\qquad A=\frac{dU}{d\tau},\quad U=\frac{d\gamma}{d\tau}.$$

> [!abstract] Canonical parametrization of uniformly accelerated motion
> Fix $a>0$ and define
> > $$t(\tau)=\frac{1}{a}\sinh(a\tau),\qquad x(\tau)=\frac{1}{a}\cosh(a\tau).$$
> Then $\gamma(\tau)=(t(\tau),x(\tau))$ is timelike, future-directed, parametrized by proper time, and has constant proper acceleration $a$. Moreover its image satisfies the hyperbola
> > $$x^2-t^2=\frac{1}{a^2},\qquad x>0.$$

> [!success] Proofs
> Differentiate:
> > $$U=\dot\gamma(\tau)=\bigl(\cosh(a\tau),\,\sinh(a\tau)\bigr).$$
> Compute
> > $$\eta(U,U)=-(\cosh(a\tau))^2+(\sinh(a\tau))^2=-1,$$
> so $\tau$ is proper time and $U$ is unit timelike; also $U^0=\cosh(a\tau)>0$ so it is future-directed. Differentiate again:
> > $$A=\dot U(\tau)=\bigl(a\sinh(a\tau),\,a\cosh(a\tau)\bigr),$$
> and compute
> > $$\eta(A,A)=-(a\sinh(a\tau))^2+(a\cosh(a\tau))^2=a^2.$$
> Finally, $x^2-t^2=a^{-2}$ follows from $\cosh^2-\sinh^2=1$.

> [!danger] What this means physically
> Uniform proper acceleration produces a hyperbola in Minkowski space: the observer stays at a fixed Minkowski “distance” from the origin in the sense of $x^2-t^2=a^{-2}$. The hyperbolic angle $a\tau$ is precisely the rapidity of the instantaneous comoving inertial frame. Thus constant proper acceleration corresponds to linearly increasing rapidity.

### Rindler coordinates and the Rindler wedge

Uniformly accelerated observers naturally introduce a new coordinate system on part of Minkowski spacetime.

> [!info] Rindler coordinates
> On the region
> > $$\mathcal{R}\coloneqq \{(t,x,y,z)\in\mathbb{R}^{1,3}: x>|t|\},$$
> define coordinates $(\eta,\rho,y,z)$ by
> > $$t=\rho\sinh\eta,\qquad x=\rho\cosh\eta,\qquad \rho>0,\ \eta\in\mathbb{R}.$$
> The region $\mathcal{R}$ is called the *right Rindler wedge*.

> [!abstract] Minkowski metric in Rindler form
> In Rindler coordinates, the Minkowski metric becomes
> > $$\eta = -\rho^2\,d\eta^2 + d\rho^2 + dy^2 + dz^2.$$

> [!success] Proofs
> Differentiate:
> > $$dt=\sinh\eta\,d\rho+\rho\cosh\eta\,d\eta,\qquad dx=\cosh\eta\,d\rho+\rho\sinh\eta\,d\eta.$$
> Then
> > $$-dt^2+dx^2=d\rho^2-\rho^2 d\eta^2,$$
> since the cross terms cancel and $\cosh^2-\sinh^2=1$. Add $dy^2+dz^2$.

> [!danger] Rindler time and redshift-like behavior in flat spacetime
> The vector field $\partial_\eta$ is Killing for $\eta = -\rho^2\,d\eta^2 + d\rho^2 + dy^2 + dz^2$ and corresponds to “time translations” for uniformly accelerated observers. Notice that the coefficient of $d\eta^2$ is $-\rho^2$: proper time at fixed $\rho$ satisfies $d\tau=\rho\,d\eta$. Thus two accelerated observers at different $\rho$ experience different clock rates relative to the same $\eta$, a phenomenon mathematically analogous to gravitational redshift.

> [!abstract] Worldlines of constant $\rho$ and their proper acceleration
> Fix $\rho=\rho_0>0$ and $y,z$ constants. The curve
> > $$\gamma(\eta)=(t(\eta),x(\eta),y,z)=(\rho_0\sinh\eta,\ \rho_0\cosh\eta,\ y,\ z)$$
> is a timelike worldline in Minkowski spacetime. When parametrized by its proper time $\tau=\rho_0\eta$, it has constant proper acceleration
> > $$\alpha=\frac{1}{\rho_0}.$$

> [!success] Proofs
> This is exactly the hyperbolic worldline with $a=1/\rho_0$ after the rescaling $\eta=a\tau$. Alternatively, the curve satisfies $x^2-t^2=\rho_0^2$, hence is timelike and future-directed, and the proper acceleration equals $1/\rho_0$.

> [!danger] The horizon in flat spacetime
> The Rindler wedge $\mathcal{R}$ is not all of Minkowski spacetime: it is bounded by the null hypersurfaces $x=\pm t$. A uniformly accelerated observer with $x^2-t^2=\rho_0^2$ can never receive signals from events with $x<-|t|$. The null boundaries act as *acceleration horizons*. This is the first place where a “horizon” appears without curvature: it is purely causal geometry.