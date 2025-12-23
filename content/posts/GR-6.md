+++
date = "2025-02-24T15:44:10-04:00"
draft = false
title = "Geodesics and Variational Principles"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

In special relativity, “free motion” means straight worldlines in Minkowski space: a particle that feels no non-gravitational forces has constant four-velocity. General relativity keeps the same physical idea (no force $\Rightarrow$ inertial motion), but changes the stage: spacetime is now a Lorentzian manifold $(M,g)$, and there is no globally preferred notion of “constant vector” because tangent spaces at different points are different vector spaces.

The Levi-Civita connection $\nabla$ is the device that repairs this: it tells us how to compare tangent vectors at nearby points. The slogan “dynamics is geometry” becomes a concrete statement:

> [!important] Free Fall as Geometry
> A freely falling particle moves along a geodesic of the Levi-Civita connection of $g$.

This lecture has two intertwined goals. First we define geodesics intrinsically using $\nabla$ and explain the subtle (but physically crucial) role of parameters. Then we show how the same curves arise from variational principles: an “energy” functional that automatically selects affine parameters, and a reparameterization-invariant “length/proper time” functional whose Euler–Lagrange equation is geodesic motion up to reparameterization. Along the way we isolate the Lorentzian features (proper time, null curves) that make GR feel different from Riemannian geometry even when the formulas look similar.

## Differentiation Along a Curve: What $\frac{D}{dt}$ Really Means

Let $(M,g)$ be a semi-Riemannian manifold and let $\nabla$ be its Levi-Civita connection.

> [!info] Vector Field Along a Curve
> Let $\gamma:I\to M$ be a $C^1$ curve. A **vector field along $\gamma$** is a map $V:I\to TM$ such that $V(t)\in T_{\gamma(t)}M$ for all $t\in I$.

One should read a vector field along $\gamma$ as “a tangent vector attached to each point of the worldline,” not as a vector field on an open set. To differentiate such an object intrinsically we use $\nabla$.

> [!info] Covariant Derivative Along a Curve
> Let $\gamma:I\to M$ be $C^1$ and let $V$ be a $C^1$ vector field along $\gamma$. Fix $t_0\in I$. Choose an open neighborhood $U$ of $\gamma(t_0)$ and extend $V$ to a genuine vector field $\widetilde V\in \mathfrak{X}(U)$ such that $\widetilde V(\gamma(t))=V(t)$ for $t$ near $t_0$. Define
> $$\left.\frac{DV}{dt}\right|_{t=t_0}:=\left.(\nabla_{\dot\gamma}\widetilde V)\right|_{\gamma(t_0)}\in T_{\gamma(t_0)}M.$$

> [!abstract] Well-Definedness of $\frac{DV}{dt}$
> The above definition is independent of the choice of extension $\widetilde V$. Hence $\frac{DV}{dt}$ is intrinsically defined by $\nabla$.

> [!success] Proof
> Let $\widetilde V_1$ and $\widetilde V_2$ be two extensions near $\gamma(t_0)$ and set $W:=\widetilde V_1-\widetilde V_2$. Then $W(\gamma(t))=0$ for $t$ near $t_0$. In particular, $W=f\,Y$ near $\gamma(t_0)$ where $f$ vanishes on the image of $\gamma$ and $Y$ is some smooth vector field (choose local coordinates and take $f$ to be the sum of squares of the components of $W$). Using $C^\infty$-linearity of $\nabla$ in its first slot and Leibniz in the second slot,
> $$\nabla_{\dot\gamma}(fY)=\dot\gamma(f)\,Y+f\,\nabla_{\dot\gamma}Y.$$
> Evaluating at $\gamma(t_0)$, both terms vanish because $f(\gamma(t_0))=0$ and also $\dot\gamma(f)(t_0)=\frac{d}{dt}(f(\gamma(t)))|_{t=t_0}=0$. Thus $(\nabla_{\dot\gamma}W)|_{\gamma(t_0)}=0$, so $(\nabla_{\dot\gamma}\widetilde V_1)|_{\gamma(t_0)}=(\nabla_{\dot\gamma}\widetilde V_2)|_{\gamma(t_0)}$.

The coordinate formula is still indispensable for actual calculations.

> [!abstract] Coordinate Expression for $\frac{DV}{dt}$
> Let $(x^i)$ be local coordinates near $\gamma(I)$ and write
> $$\dot\gamma(t)=\dot x^i(t)\,\partial_i\big|_{\gamma(t)},\quad V(t)=V^j(t)\,\partial_j\big|_{\gamma(t)}.$$
> If $\Gamma^k{}_{ij}$ are the Christoffel symbols of $\nabla$ in these coordinates, then
> $$\frac{DV}{dt}=\left(\frac{dV^k}{dt}+\Gamma^k{}_{ij}(\gamma(t))\,\dot x^i(t)\,V^j(t)\right)\partial_k\big|_{\gamma(t)}.$$

> [!success] Proof
> Extend $V^j(t)$ to functions $V^j(x)$ near $\gamma(I)$ and consider $\widetilde V=V^j\partial_j$. Then
> $$\nabla_{\dot\gamma}\widetilde V=\dot x^i\,\nabla_{\partial_i}(V^j\partial_j)=\dot x^i\left((\partial_i V^j)\partial_j+V^j\nabla_{\partial_i}\partial_j\right)=\left(\dot x^i\partial_i V^k+\Gamma^k{}_{ij}\dot x^i V^j\right)\partial_k.$$
> Along $\gamma(t)$ we have $\dot x^i\partial_i V^k=\frac{d}{dt}(V^k(\gamma(t)))=\frac{dV^k}{dt}$, yielding the formula.

> [!danger] Connection Coefficients Are Not Forces
> What should feel conceptually solid is this: $\Gamma^k{}_{ij}$ are not “extra forces.” They are coordinate data for the connection. When you change coordinates, they change in a complicated way precisely so that the geometric object $\frac{DV}{dt}$ stays the same.

## Geodesics as Inertial Motion and the Meaning of Affine Parameters

> [!info] Geodesic
> A $C^2$ curve $\gamma:I\to M$ is a **geodesic** (for $\nabla$) if its tangent is parallel along itself:
> $$\frac{D\dot\gamma}{dt}=0.$$

Physically: $\dot\gamma$ is the velocity field of the worldline. The equation $\frac{D\dot\gamma}{dt}=0$ says “the acceleration is zero once you compare nearby velocities using $\nabla$.” In curved spacetime this is the correct replacement for “constant four-velocity.”

> [!abstract] Geodesic Equation in Coordinates
> In local coordinates $x^k(t)$, the geodesic condition is the second-order ODE system
> $$\ddot x^k+\Gamma^k{}_{ij}(x)\,\dot x^i\dot x^j=0.$$

> [!success] Proof
> Apply the coordinate expression for $\frac{D}{dt}$ to $V=\dot\gamma$ and read off the coefficients of $\partial_k$.

A geodesic is a **curve in $M$**, but the equation above refers to a **parameter**. This is not a pedantic point: in relativity we constantly reparameterize curves (coordinate time, proper time, affine parameters, and so on), and a parameter choice can hide or reveal structure.

> [!info] Affine Parameter
> A parameter $t$ on a geodesic $\gamma$ is called **affine** if $\gamma$ satisfies $\frac{D\dot\gamma}{dt}=0$ in that parameter, equivalently if it satisfies the coordinate ODE $\ddot x^k+\Gamma^k{}_{ij}\dot x^i\dot x^j=0$.

> [!abstract] Reparameterization and the Non-Affine Geodesic Equation
> Let $\gamma:I\to M$ be $C^2$ and let $\phi:J\to I$ be a $C^2$ diffeomorphism with $\phi'>0$. Set $\widetilde\gamma:=\gamma\circ\phi$ and use $\tau$ as the parameter on $J$. Then
> $$\frac{D\dot{\widetilde\gamma}}{d\tau}=\phi'(\tau)^2\,\left(\frac{D\dot\gamma}{dt}\right)\Big|_{t=\phi(\tau)}+\phi''(\tau)\,\dot\gamma\big(\phi(\tau)\big).$$
> In particular, if $\gamma$ is an affine geodesic, then $\widetilde\gamma$ is an affine geodesic if and only if $\phi''\equiv 0$, i.e. $\phi(\tau)=a\tau+b$ with $a\neq 0$. More generally, a reparameterization of an affine geodesic satisfies
> $$\frac{D\dot\gamma}{dt}=f(t)\,\dot\gamma$$
> for some scalar function $f$.

> [!success] Proof
> Write $t=\phi(\tau)$. Then $\dot{\widetilde\gamma}=\frac{d}{d\tau}\gamma(\phi(\tau))=\phi'(\tau)\dot\gamma$. Covariantly differentiate:
> $$\frac{D\dot{\widetilde\gamma}}{d\tau}=\frac{D}{d\tau}(\phi'\dot\gamma)=\phi''\dot\gamma+\phi'\frac{D\dot\gamma}{d\tau}.$$
> But $\frac{D\dot\gamma}{d\tau}=\frac{dt}{d\tau}\frac{D\dot\gamma}{dt}=\phi'\frac{D\dot\gamma}{dt}$, giving the formula. If $\frac{D\dot\gamma}{dt}=0$, the condition for $\frac{D\dot{\widetilde\gamma}}{d\tau}=0$ is exactly $\phi''=0$. The “non-affine” form follows by solving for $\frac{D\dot\gamma}{dt}$ after a general parameter change.

> [!danger] Parallel Acceleration Is Parameter, Not Force
> The equation $\frac{D\dot\gamma}{dt}=f(t)\dot\gamma$ should be read as “the acceleration is parallel to the velocity.” This does not bend the curve in spacetime; it only changes how fast you move along it. In practice, many convenient parameters in GR are non-affine, so this parallel-acceleration term appears constantly and must not be mistaken for a physical force.

## Constant Speed, Proper Time, and What Makes Null Curves Special

> [!abstract] Constant Speed Along Affine Geodesics
> If $\gamma$ is an affinely parameterized geodesic, then
> $$\frac{d}{dt}\,g(\dot\gamma,\dot\gamma)=0.$$
> In particular, $g(\dot\gamma,\dot\gamma)$ is constant, so the causal character (timelike/null/spacelike) of $\dot\gamma$ cannot change along an affine geodesic.

> [!success] Proof
> Metric compatibility gives
> $$\frac{d}{dt}g(\dot\gamma,\dot\gamma)=(\nabla_{\dot\gamma}g)(\dot\gamma,\dot\gamma)+2\,g\!\left(\nabla_{\dot\gamma}\dot\gamma,\dot\gamma\right)=2\,g\!\left(\frac{D\dot\gamma}{dt},\dot\gamma\right).$$
> If $\frac{D\dot\gamma}{dt}=0$, the derivative vanishes.

This proposition explains why proper time is the natural parameter for massive particles.

> [!info] Proper Time and Arc-Length Parameters
> Let $\gamma$ be timelike. A parameter $\tau$ is called **proper time** along $\gamma$ if
> $$g(\dot\gamma,\dot\gamma)\equiv -1.$$
> Let $\gamma$ be spacelike. A parameter $s$ is called **arc-length** if
> $$g(\dot\gamma,\dot\gamma)\equiv +1.$$

> [!abstract] Proper Time and Arc-Length Are Affine
> If $\gamma$ is a timelike (resp. spacelike) geodesic and is parameterized by proper time $\tau$ (resp. arc-length $s$), then this parameter is affine.

> [!success] Proof
> If $\gamma$ is an affine geodesic, $g(\dot\gamma,\dot\gamma)$ is constant. Rescaling the parameter by a constant factor changes $\dot\gamma$ by the reciprocal factor and therefore rescales $g(\dot\gamma,\dot\gamma)$ by a constant. Thus, after an affine change of parameter, we can impose the normalization $g(\dot\gamma,\dot\gamma)=\pm 1$. Conversely, any parameter with $g(\dot\gamma,\dot\gamma)\equiv \pm 1$ differs from an affine parameter by an affine rescaling on each connected segment where $\dot\gamma\neq 0$.

> [!danger] Why Null Curves Are Different
> Null geodesics are fundamentally different: if $g(\dot\gamma,\dot\gamma)\equiv 0$, there is no way to normalize the speed to $\pm 1$. Null geodesics still admit affine parameters, but there is no canonical normalization. Physically this is why “proper time” is a concept for massive observers but not for light.

## Two Variational Principles: Energy vs. Length/Proper Time

There are two closely related functionals one can put on curves: an **energy** functional that depends on the parameter and produces affine geodesics, and a **length/proper time** functional that is reparameterization-invariant and produces the same unparameterized curves.

### The Energy Functional Selects Affine Parameters

> [!info] Energy Functional
> For a $C^1$ curve $\gamma:[a,b]\to M$, define
> $$E[\gamma]:=\frac12\int_a^b g(\dot\gamma,\dot\gamma)\,dt.$$

> [!note] Critical Points of Energy Are Affine Geodesics
> Let $(M,g)$ be semi-Riemannian. A $C^2$ curve $\gamma$ with fixed endpoints is a critical point of $E[\gamma]$ among $C^1$ variations with fixed endpoints if and only if $\gamma$ is an affinely parameterized geodesic:
> $$\frac{D\dot\gamma}{dt}=0.$$

> [!success] Proof
> Work in local coordinates $x^i(t)$ and write $g=g_{ij}(x)\,dx^i dx^j$. The Lagrangian for $E$ is
> $$L(x,\dot x)=\frac12\,g_{ij}(x)\dot x^i\dot x^j.$$
> Compute
> $$\frac{\partial L}{\partial \dot x^k}=g_{kj}(x)\dot x^j,\quad \frac{\partial L}{\partial x^k}=\frac12(\partial_k g_{ij})(x)\dot x^i\dot x^j.$$
> The Euler–Lagrange equations become
> $$\frac{d}{dt}\big(g_{kj}\dot x^j\big)-\frac12(\partial_k g_{ij})\dot x^i\dot x^j=0.$$
> Expand the total derivative:
> $$\frac{d}{dt}\big(g_{kj}\dot x^j\big)=(\partial_\ell g_{kj})\dot x^\ell\dot x^j+g_{kj}\ddot x^j.$$
> Thus
> $$g_{kj}\ddot x^j+(\partial_\ell g_{kj})\dot x^\ell\dot x^j-\frac12(\partial_k g_{ij})\dot x^i\dot x^j=0.$$
> Symmetrize the middle term by swapping dummy indices and averaging:
> $$ (\partial_\ell g_{kj})\dot x^\ell\dot x^j=\frac12(\partial_\ell g_{kj}+\partial_j g_{k\ell})\dot x^\ell\dot x^j. $$
> So
> $$g_{kj}\ddot x^j+\frac12\big(\partial_i g_{jk}+\partial_j g_{ik}-\partial_k g_{ij}\big)\dot x^i\dot x^j=0.$$
> Multiplying by $g^{mk}$ yields
> $$\ddot x^m+\Gamma^m{}_{ij}\dot x^i\dot x^j=0,$$
> with $\Gamma^m{}_{ij}$ the Levi-Civita symbols. This is exactly $\frac{D\dot\gamma}{dt}=0$.

> [!danger] Why Energy Fixes the Parameter
> The key feature is that the energy functional is **not** reparameterization-invariant. That is precisely why it locks you into affine parameters: if you change parameters non-affinely, the value of $E$ changes, and the Euler–Lagrange equation changes accordingly.

### The Length/Proper Time Functional Selects the Curve, Not the Parameter

Assume $\gamma$ is everywhere timelike or everywhere spacelike so that $g(\dot\gamma,\dot\gamma)$ has a constant sign and never vanishes.

> [!info] Length and Proper Time Functional
> Define
> $$\mathcal{L}[\gamma]:=\int_a^b \sqrt{|g(\dot\gamma,\dot\gamma)|}\,dt.$$
> In the timelike case, $\mathcal{L}$ is (up to a sign convention) the physical proper time elapsed along the worldline. In the spacelike (or Riemannian) case, it is the ordinary length.

> [!abstract] Reparameterization Invariance of $\mathcal{L}$
> If $\phi:[\tilde a,\tilde b]\to[a,b]$ is an orientation-preserving $C^1$ diffeomorphism, then
> $$\mathcal{L}[\gamma\circ\phi]=\mathcal{L}[\gamma].$$

> [!success] Proof
> Write $\widetilde\gamma=\gamma\circ\phi$. Then $\dot{\widetilde\gamma}(\sigma)=\dot\gamma(\phi(\sigma))\,\phi'(\sigma)$. Hence
> $$\sqrt{|g(\dot{\widetilde\gamma},\dot{\widetilde\gamma})|}=\sqrt{|g(\dot\gamma,\dot\gamma)|}\,\phi'(\sigma),$$
> and a change of variables completes the proof.

> [!note] Critical Points of $\mathcal{L}$ Are Geodesics Up to Reparameterization
> Let $\gamma$ be $C^2$ with fixed endpoints and assume $g(\dot\gamma,\dot\gamma)$ never vanishes and has constant sign on $[a,b]$. Then $\gamma$ is a critical point of $\mathcal{L}$ if and only if, after reparameterizing by arc-length (spacelike) or proper time (timelike), it becomes an affine geodesic. Equivalently, in an arbitrary parameter $t$ the Euler–Lagrange equation is the non-affine geodesic equation
> $$\frac{D\dot\gamma}{dt}=f(t)\,\dot\gamma$$
> for some scalar function $f$.

> [!success] Proof
> Let $\gamma$ be critical for $\mathcal{L}$. Since $\mathcal{L}$ is reparameterization-invariant, we may replace $\gamma$ by any orientation-preserving reparameterization without changing criticality. Reparameterize $\gamma$ by proper time (timelike) or arc-length (spacelike), obtaining $\overline\gamma$ with $|g(\dot{\overline\gamma},\dot{\overline\gamma})|\equiv 1$.
> In that parameter, the Lagrangians for $\mathcal{L}$ and for $E$ differ by a constant factor along admissible curves, and the Euler–Lagrange equations coincide. Concretely, writing
> $$L_{\mathcal{L}}(x,\dot x)=\sqrt{|g_{ij}(x)\dot x^i\dot x^j|},\quad L_E(x,\dot x)=\frac12 g_{ij}(x)\dot x^i\dot x^j,$$
> one checks that along curves satisfying $|g(\dot x,\dot x)|\equiv 1$ we have $L_{\mathcal{L}}\equiv 1$ and the first variation equations reduce to those of $L_E$ (the normalization removes the parameter-dependent prefactor coming from the square root). Therefore $\overline\gamma$ is an affine geodesic by the previous theorem. Undoing the reparameterization gives the non-affine form, since any reparameterization of an affine geodesic satisfies $\frac{D\dot\gamma}{dt}=f(t)\dot\gamma$ as proved earlier.
> Conversely, if $\gamma$ is a reparameterization of an affine geodesic, then in its arc-length/proper-time parameter it is a critical point of $E$ and hence of $\mathcal{L}$, and reparameterization-invariance implies the original parameterization is also critical for $\mathcal{L}$.

> [!danger] Proper Time Extremization
> In Lorentzian geometry there is an important additional statement: among sufficiently nearby timelike curves with fixed endpoints, a timelike geodesic locally **maximizes** proper time. Proving this cleanly requires the second variation and the notion of conjugate points, which we will return to later when discussing focusing and singularity theorems.

## Null Geodesics and the Auxiliary-Field Trick

For null curves, $\mathcal{L}[\gamma]=\int \sqrt{|g(\dot\gamma,\dot\gamma)|}\,dt$ is identically $0$, so it cannot characterize null geodesics variationally. A standard fix is to introduce an auxiliary positive function (an “einbein”) to recover a meaningful action.

> [!info] Einbein Action for Causal Geodesics
> Let $\gamma:[a,b]\to M$ be $C^1$ and let $e:[a,b]\to(0,\infty)$ be $C^1$. Define
> $$\mathcal{S}[\gamma,e]:=\frac12\int_a^b e^{-1}(t)\,g(\dot\gamma,\dot\gamma)\,dt.$$

> [!abstract] Euler–Lagrange Equations and the Null Constraint
> Critical points $(\gamma,e)$ of $\mathcal{S}$ satisfy
> $$\frac{D}{dt}\big(e^{-1}\dot\gamma\big)=0\quad\text{and}\quad g(\dot\gamma,\dot\gamma)=0.$$
> In particular, $\gamma$ is a null geodesic up to reparameterization, and choosing a parameter with $e\equiv 1$ produces an affine parameter along $\gamma$.

> [!success] Proof
> Work in local coordinates $x^i(t)$ with Lagrangian
> $$L(x,\dot x,e)=\frac12 e^{-1}g_{ij}(x)\dot x^i\dot x^j.$$
> First vary in $e$:
> $$\frac{\partial L}{\partial e}=-\frac12 e^{-2}g_{ij}\dot x^i\dot x^j,$$
> so the Euler–Lagrange equation for $e$ gives $g_{ij}\dot x^i\dot x^j=0$, i.e. $g(\dot\gamma,\dot\gamma)=0$.
> Next vary in $x^k$. We have
> $$\frac{\partial L}{\partial \dot x^k}=e^{-1}g_{kj}\dot x^j,\quad \frac{\partial L}{\partial x^k}=\frac12 e^{-1}(\partial_k g_{ij})\dot x^i\dot x^j.$$
> The Euler–Lagrange equation reads
> $$\frac{d}{dt}\big(e^{-1}g_{kj}\dot x^j\big)-\frac12 e^{-1}(\partial_k g_{ij})\dot x^i\dot x^j=0.$$
> Multiply by $e$ and expand the derivative:
> $$\frac{d}{dt}\big(g_{kj}\dot x^j\big)-\frac{\dot e}{e}\,g_{kj}\dot x^j-\frac12(\partial_k g_{ij})\dot x^i\dot x^j=0.$$
> As in the energy computation, rewrite the first and third terms using the Levi-Civita symbols to obtain
> $$\ddot x^m+\Gamma^m{}_{ij}\dot x^i\dot x^j=\frac{\dot e}{e}\,\dot x^m,$$
> which is exactly the non-affine geodesic equation $\frac{D\dot\gamma}{dt}=f(t)\dot\gamma$ with $f=\dot e/e$. Equivalently, $\frac{D}{dt}(e^{-1}\dot\gamma)=0$.
> Finally, if we reparameterize by a new parameter $\tau$ satisfying $d\tau/dt=e(t)$, then in $\tau$ we have $e\equiv 1$ and the equation becomes $\frac{D\dot\gamma}{d\tau}=0$, i.e. $\tau$ is affine.

> [!danger] Same Structure as the Massive Particle Trick
> This is the same structural pattern we saw earlier for the massive particle: an auxiliary field turns a homogeneous square-root Lagrangian into a quadratic one, making the symmetry (reparameterization invariance) and its associated constraint transparent. In the null case the constraint is exactly $g(\dot\gamma,\dot\gamma)=0$.

## Initial Value Problem, Exponential Map, and Normal Coordinates

Geodesics are defined by an ODE, so existence and uniqueness are a theorem of ODE theory, but the geometric payoff is large: it lets us build coordinates adapted to free fall.

> [!note] Local Existence and Uniqueness for Geodesics
> Given $(p,v)\in TM$, there exists $\varepsilon>0$ and a unique geodesic $\gamma:(-\varepsilon,\varepsilon)\to M$ such that $\gamma(0)=p$ and $\dot\gamma(0)=v$. Moreover, $\gamma$ depends smoothly on $(p,v)$.

> [!success] Proof
> In a coordinate chart, the geodesic equation is a smooth second-order ODE system. Write it as a first-order system on $TU$:
> $$\dot x^k=y^k,\quad \dot y^k=-\Gamma^k{}_{ij}(x)\,y^i y^j.$$
> Picard–Lindelöf gives local existence, uniqueness, and smooth dependence on initial data.

> [!info] Exponential Map
> Fix $p\in M$. For $v$ in a sufficiently small neighborhood of $0\in T_pM$, let $\gamma_v$ be the unique geodesic with $\gamma_v(0)=p$ and $\dot\gamma_v(0)=v$. Define
> $$\exp_p(v):=\gamma_v(1).$$

> [!abstract] Derivative of $\exp_p$ at the Origin
> For each $p\in M$, one has $(d\exp_p)_0=\mathrm{id}_{T_pM}$. In particular, $\exp_p$ is a local diffeomorphism near $0$.

> [!success] Proof
> In local coordinates centered at $p$, the geodesic equation implies the Taylor expansion $x(t)=tv+O(t^2)$ for the geodesic with initial velocity $v$. Hence $\exp_p(v)=x(1)=v+O(|v|^2)$, so differentiating at $0$ gives the identity.

> [!info] Normal Coordinates
> Choose a basis of $T_pM$ and identify it with $\mathbb{R}^n$. The coordinate chart near $p$ given by $\exp_p$ is called a system of **normal coordinates** centered at $p$.

> [!abstract] Christoffel Symbols Vanish at the Center of Normal Coordinates
> In normal coordinates centered at $p$, one has $\Gamma^k{}_{ij}(p)=0$.

> [!success] Proof
> In normal coordinates, the geodesic through $p$ with initial velocity $v$ is, by construction, the curve $t\mapsto tv$ in coordinate space. Plugging $x^k(t)=tv^k$ into the geodesic equation gives at $t=0$
> $$0=\Gamma^k{}_{ij}(p)\,v^i v^j\quad\text{for all }v\in\mathbb{R}^n.$$
> By polarization, $\Gamma^k{}_{ij}(p)=0$.

> [!abstract] First Derivatives of the Metric Vanish in Normal Coordinates
> Let $(x^i)$ be normal coordinates centered at $p$. Then
> $$\partial_\ell g_{ij}(p)=0\quad\text{for all }i,j,\ell.$$

> [!success] Proof
> Metric compatibility in coordinates says
> $$(\nabla_\ell g)_{ij}=\partial_\ell g_{ij}-\Gamma^m{}_{\ell i}g_{mj}-\Gamma^m{}_{\ell j}g_{im}.$$
> Since $\nabla g=0$ and $\Gamma^m{}_{\ell i}(p)=0$ in normal coordinates, evaluating at $p$ yields $\partial_\ell g_{ij}(p)=0$.

> [!danger] What “Local Inertial Frame” Really Means
> This is the cleanest mathematical version of “local inertial frames.” In suitable coordinates centered at a point $p$, the metric looks constant to first order and the geodesic equation has no Christoffel terms at $p$. What you cannot kill is curvature: the second derivatives of $g$ (and the tidal effects they encode) are the invariant content.

## Two Concrete Sanity Checks

### Minkowski Spacetime

In inertial coordinates on Minkowski space, $\Gamma\equiv 0$, so the geodesic equation is simply $\ddot x^\mu=0$. Thus geodesics are affine lines. In curvilinear coordinates the Christoffel symbols do not vanish, but the geodesics are still the same geometric curves; the complicated coordinate ODE is just straight motion written in a distorted parameterization.

### The Round $2$-Sphere

On $(S^2,g_{\mathrm{round}})$, geodesics are great circles. One quick way to see this (without already knowing the answer) is: a unit-speed geodesic has constant speed by the “Constant Speed Along Affine Geodesics” proposition, and by the variational theorem it is a critical point of the energy among fixed-endpoint curves. In embedded coordinates in $\mathbb{R}^3$, one can show that the geodesic acceleration is normal to the sphere, forcing the curve to lie in a plane through the origin, hence a great circle. We will revisit this type of computation later in spacetime when we interpret geodesic deviation as a curvature effect.

In this lecture we developed geodesics from both the connection and variational perspectives, including the role of affine parameters and proper time. We also introduced the exponential map and normal coordinates as the local “inertial” charts built from geodesics. Next we introduce curvature as the obstruction to flattening geometry beyond first order.
