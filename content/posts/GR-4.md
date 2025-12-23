+++
date = "2025-02-24T15:44:10-04:00"
draft = false
title = "Tensor Fields and Affine Connections: Differentiation Without Coordinates"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

Lectures 1–3 lived in the linear comfort zone of $(\mathbb{R}^{1,3},\eta)$, where “differentiation” is just ordinary differentiation of vector-valued functions. The moment we move to a manifold $M$ (and, soon, to a Lorentzian manifold $(M,g)$), that luxury disappears: the value $Y(p)$ of a vector field lives in $T_pM$, and $T_pM$ changes with $p$. So even writing down something as basic as “acceleration” forces us to make a choice.

Physically, this is not an abstract nuisance; it is the mechanism behind two familiar facts:

1. In **curvilinear coordinates** on flat spacetime, extra terms appear in equations of motion (they look like forces but are really coordinate effects).
2. In **curved spacetime**, there is no global inertial coordinate system, and those “extra terms” become genuinely geometric data.

The mathematical object that organizes both phenomena is an **affine connection** (covariant derivative). The slogan to keep in mind is:

$$\textbf{a connection is geometric data;\quad Christoffel symbols are its coordinate avatar.}$$

Our agenda is concrete:

1. review tensor fields and the tensor transformation law (the litmus test for “coordinate-free data”);
2. explain why differentiating vector fields is not intrinsic without extra structure;
3. define affine connections axiomatically and record their first consequences (torsion, tensoriality statements);
4. extend a connection to all tensor fields (so we can later differentiate stress-energy, curvature, etc.);
5. compute the flat connection in polar coordinates as a hands-on demonstration that Christoffel symbols are not tensors, and connect the resulting terms to “fictitious forces”.

## Tensors at a Point and Tensor Fields

Let $M$ be a smooth $n$-manifold. We use $\mathfrak{X}(M)$ for smooth vector fields and $\Omega^1(M)$ for smooth 1-forms.

> [!info] Tensors of Type $(k,\ell)$ at a Point
> Let $V$ be a real vector space. A **tensor of type $(k,\ell)$ on $V$** is a multilinear map
> $$T:(V^*)^{\times k}\times V^{\times \ell}\to \mathbb{R}.$$
> Equivalently,
> $$\mathsf{T}^k{}_\ell(V):=\underbrace{V\otimes\cdots\otimes V}_{k\ \text{times}}\otimes \underbrace{V^*\otimes\cdots\otimes V^*}_{\ell\ \text{times}}.$$

> [!info] Tensor Fields
> A **tensor field of type $(k,\ell)$** on $M$ is a smooth assignment
> $$p\longmapsto T(p)\in \mathsf{T}^k{}_\ell(T_pM).$$
> We write $\Gamma(\mathsf{T}^k{}_\ell M)$ for the space of smooth $(k,\ell)$-tensor fields.

> [!danger] What Shows Up in Relativity
> Functions are $(0,0)$-tensors, vector fields are $(1,0)$-tensors, 1-forms are $(0,1)$-tensors. A Lorentzian metric $g$ is a symmetric $(0,2)$-tensor field. The stress-energy tensor $T$ in GR is also a symmetric $(0,2)$-tensor field, and one of Einstein’s central structural requirements is the covariant conservation law $\nabla_a T^{ab}=0$ (we will make sense of this once $\nabla$ is defined).

## Coordinates: Bases, Components, and the Tensor Transformation Law

Let $(U;x^1,\dots,x^n)$ be a coordinate chart. Write
$$\partial_i:=\frac{\partial}{\partial x^i},\quad dx^i(\partial_j)=\delta^i{}_j.$$

Then $\{\partial_i|_p\}$ is a basis of $T_pM$ and $\{dx^i|_p\}$ is its dual basis of $T_p^*M$.

> [!info] Components
> If $T\in \Gamma(\mathsf{T}^k{}_\ell M)$, its components on $U$ are the smooth functions
> $$T^{i_1\cdots i_k}{}_{j_1\cdots j_\ell}:=T(dx^{i_1},\dots,dx^{i_k},\partial_{j_1},\dots,\partial_{j_\ell}).$$
> Equivalently,
> $$T = T^{i_1\cdots i_k}{}_{j_1\cdots j_\ell}\;\partial_{i_1}\otimes\cdots\otimes \partial_{i_k}\otimes dx^{j_1}\otimes\cdots\otimes dx^{j_\ell}.$$

> [!abstract] Tensor Transformation Law
> Let $(x^i)$ and $(x'^a)$ be two coordinate systems on an overlap, and let $T\in \Gamma(\mathsf{T}^k{}_\ell M)$. Then the components transform by
> $$T'^{a_1\cdots a_k}{}_{b_1\cdots b_\ell}=\frac{\partial x'^{a_1}}{\partial x^{i_1}}\cdots \frac{\partial x'^{a_k}}{\partial x^{i_k}}\frac{\partial x^{j_1}}{\partial x'^{b_1}}\cdots \frac{\partial x^{j_\ell}}{\partial x'^{b_\ell}}\;T^{i_1\cdots i_k}{}_{j_1\cdots j_\ell}.$$

> [!success] Proof
> Use
> $$\partial'_b=\frac{\partial x^j}{\partial x'^b}\partial_j,\quad dx'^a=\frac{\partial x'^a}{\partial x^i}dx^i,$$
> and multilinearity.

> [!danger] A Litmus Test
> This rule is the **definition** of “tensorial behavior”. If an object acquires extra terms involving **second derivatives** of the coordinate change, it is not a tensor. Christoffel symbols will be the canonical example.

## Index Operations: Contraction and the Musical Maps

> [!info] Contraction
> Given $T\in \mathsf{T}^k{}_\ell(V)$ and indices $1\le r\le k$, $1\le s\le \ell$, the contraction $\mathrm{tr}_{r,s}T\in \mathsf{T}^{k-1}{}_{\ell-1}(V)$ is obtained by pairing the $r$-th covector slot with the $s$-th vector slot. In coordinates, it is the operation of summing one upper and one lower index.

Now suppose $g$ is a nondegenerate symmetric $(0,2)$-tensor field (Riemannian or Lorentzian).

> [!info] Musical Isomorphisms
> Define
> $$\flat:TM\to T^*M,\quad v^\flat:=g(v,\cdot),$$
> and its inverse
> $$\sharp:T^*M\to TM,\quad \alpha^\sharp\ \text{defined by}\ g(\alpha^\sharp,\cdot)=\alpha.$$
> In coordinates, $v_i=g_{ij}v^j$ and $\alpha^i=g^{ij}\alpha_j$ where $(g^{ij})=(g_{ij})^{-1}$.

> [!danger] Remark
> Nondegeneracy is what matters: the musical maps exist in Lorentzian signature just as well as in Riemannian signature. What changes is the causal meaning of $g(v,v)$, so signs become physics.

## Why We Need a Connection

For a function $f\in C^\infty(M)$ and a vector field $X\in\mathfrak{X}(M)$, the derivative $X(f)$ is intrinsic: it differentiates the scalar function $f$ along the flow of $X$.

For vector fields $Y$, the expression “$X(Y)$” has no intrinsic meaning. The naïve obstruction is that $Y(p)\in T_pM$ and $Y(q)\in T_qM$ live in different vector spaces. There is no canonical subtraction $Y(q)-Y(p)$, hence no canonical difference quotient.

There is also a physics-flavored way to say the same thing: if you want to define **acceleration** of a particle, you need a rule that compares velocities at nearby points. In flat spacetime with inertial coordinates, you can do this by identifying all tangent spaces with $\mathbb{R}^4$. On a general manifold (and certainly on curved spacetime), there is no such global identification.

A **connection** is precisely the structure that supplies this missing comparison.

## Affine Connections: Axioms and Immediate Consequences

> [!info] Affine Connection / Covariant Derivative
> An **affine connection** on $TM$ is an $\mathbb{R}$-bilinear map
> $$\nabla:\mathfrak{X}(M)\times \mathfrak{X}(M)\to \mathfrak{X}(M),\quad (X,Y)\mapsto \nabla_X Y,$$
> such that for all $X,X',Y,Y'\in \mathfrak{X}(M)$ and $f\in C^\infty(M)$:
> 1. $\nabla_{fX+X'}Y = f\nabla_X Y+\nabla_{X'}Y$  ( $C^\infty$-linearity in the first slot),
> 2. $\nabla_X(Y+Y')=\nabla_XY+\nabla_XY'$  ( $\mathbb{R}$-linearity in the second slot),
> 3. $\nabla_X(fY)=X(f)\,Y+f\nabla_XY$  (Leibniz rule in the second slot).

> [!danger] The Asymmetry Is the Point
> The first slot is tensorial and the second slot is differential:
> $$\nabla_{fX}Y=f\nabla_XY,\quad \nabla_X(fY)=X(f)Y+f\nabla_XY.$$
> If $\nabla$ were $C^\infty$-linear in **both** slots, it would carry no information about differentiation.

> [!abstract] Tensoriality in the First Slot
> For each $p\in M$ and each $Y\in\mathfrak{X}(M)$, the value $(\nabla_XY)(p)$ depends only on $X(p)$ (not on how $X$ is extended away from $p$).

> [!success] Proof
> If $X,X'\in\mathfrak{X}(M)$ satisfy $X(p)=X'(p)$, then $X-X'=fZ$ for some $Z$ and some $f\in C^\infty(M)$ with $f(p)=0$. By $C^\infty$-linearity in the first slot,
> $$(\nabla_XY-\nabla_{X'}Y)(p)=(\nabla_{fZ}Y)(p)=f(p)\,(\nabla_ZY)(p)=0.$$

> [!info] Torsion
> The **torsion** of $\nabla$ is the bilinear map
> $$T^\nabla(X,Y):=\nabla_XY-\nabla_YX-[X,Y].$$

> [!abstract] Torsion Is a Tensor
> $T^\nabla$ is $C^\infty(M)$-linear in each argument, hence defines a tensor field of type $(1,2)$.

> [!success] Proof
> Using the axioms of $\nabla$ and the Leibniz rule for the Lie bracket,
> > $$[fX,Y]=f[X,Y]-Y(f)X,\quad [X,fY]=f[X,Y]+X(f)Y,$$
> one checks directly that $T^\nabla(fX,Y)=fT^\nabla(X,Y)$ and $T^\nabla(X,fY)=fT^\nabla(X,Y)$.

> [!danger] Physics Note
> In standard GR one assumes torsion-free (Levi–Civita connection). Torsion becomes relevant in extensions such as Einstein–Cartan theory, where spin can source torsion. For now we keep torsion visible so we know exactly what we assume later.

## Extending $\nabla$ to All Tensor Fields

A connection on $TM$ should not only differentiate vector fields; it should differentiate **any** tensor field in a way compatible with tensor algebra. This is essential in GR because the objects we differentiate are typically tensors: the metric, the stress-energy tensor, and eventually the curvature tensor.

> [!abstract] Covariant Derivative of 1-Forms
> Let $\nabla$ be a connection on $TM$. There is a unique operator (also denoted $\nabla$) such that for any $X\in\mathfrak{X}(M)$ and any $\alpha\in\Omega^1(M)$,
> $$(\nabla_X\alpha)(Y):=X(\alpha(Y))-\alpha(\nabla_XY)\quad\text{for all }Y\in\mathfrak{X}(M).$$
> Moreover, $\nabla_X\alpha$ is $C^\infty(M)$-linear in $Y$, hence a 1-form.

> [!success] Proof
> For $f\in C^\infty(M)$,
> $$(\nabla_X\alpha)(fY)=X(\alpha(fY))-\alpha(\nabla_X(fY))=X(f\alpha(Y))-\alpha(X(f)Y+f\nabla_XY)=fX(\alpha(Y))-\alpha(f\nabla_XY)=f(\nabla_X\alpha)(Y),$$
> so $\nabla_X\alpha$ is $C^\infty$-linear in $Y$. Uniqueness follows because the formula is forced by the Leibniz rule applied to the pairing $\alpha(Y)$.

> [!abstract] Covariant Derivative of General Tensors
> There is a unique extension of $\nabla$ to an operator
> $$\nabla:\mathfrak{X}(M)\times \Gamma(\mathsf{T}^k{}_\ell M)\to \Gamma(\mathsf{T}^k{}_\ell M)$$
> such that for each fixed $X$:
> 1. $T\mapsto \nabla_XT$ is $\mathbb{R}$-linear and satisfies the Leibniz rule with respect to tensor products;
> 2. $\nabla_X$ commutes with contractions;
> 3. on functions and vector fields it agrees with $X(f)$ and the given $\nabla$.

> [!success] Proof
> Define $\nabla$ on 1-forms by the previous proposition, extend to tensor products by the Leibniz rule, and then to sums by linearity. Compatibility with contraction uniquely determines the action on general tensors once it is known on $TM$ and $T^*M$.

> [!danger] Why This Matters Later
> Once we have $\nabla$ and a Lorentzian metric $g$, we can state meaningful differential equations on tensor fields: $\nabla g=0$ (metric compatibility), $\nabla_a T^{ab}=0$ (local energy-momentum conservation), and $\nabla_U U=0$ (free-fall / geodesic motion). None of these can even be written down without a covariant derivative.

## Connections in Coordinates and Christoffel Symbols

Let $(U;x^1,\dots,x^n)$ be a chart and write $\nabla_i:=\nabla_{\partial_i}$.

> [!info] Christoffel Symbols
> The **Christoffel symbols** $\Gamma^k{}_{ij}$ of $\nabla$ in the coordinates $(x^i)$ are defined by
> $$\nabla_{\partial_i}\partial_j=\Gamma^k{}_{ij}\,\partial_k.$$

Given a vector field $Y=Y^j\partial_j$, the covariant derivative $\nabla_iY$ has the familiar component form
$$\nabla_iY = (\partial_iY^k+\Gamma^k{}_{ij}Y^j)\,\partial_k.$$

More generally, for a tensor field $T=T^{i_1\cdots i_k}{}_{j_1\cdots j_\ell}$ one has
$$
(\nabla_a T)^{i_1\cdots i_k}{}_{j_1\cdots j_\ell}
=\partial_a T^{i_1\cdots i_k}{}_{j_1\cdots j_\ell}
+\sum_{r=1}^k \Gamma^{i_r}{}_{a m}\,T^{i_1\cdots m\cdots i_k}{}_{j_1\cdots j_\ell}
-\sum_{s=1}^\ell \Gamma^{m}{}_{a j_s}\,T^{i_1\cdots i_k}{}_{j_1\cdots m\cdots j_\ell}.
$$

> [!danger] A Useful Physical Picture
> In inertial coordinates on Minkowski space, the “natural” connection has $\Gamma^k{}_{ij}=0$, so covariant derivatives are just partial derivatives. In a non-inertial coordinate system, the same flat connection acquires nonzero $\Gamma$’s, and the extra terms in $\nabla$ encode the familiar inertial-force-looking corrections. In curved spacetime, there is no global coordinate system with all $\Gamma$’s equal to zero; that is where gravity enters.

## Why Christoffel Symbols Are Not Tensors

The entire point of tensor calculus is that tensorial objects transform by the tensor rule, with only first derivatives of the coordinate change. Christoffel symbols fail this test.

> [!abstract] Transformation Law for Christoffel Symbols
> Let $(x^i)$ and $(x'^a)$ be two coordinate systems on an overlap. Then
> $$\Gamma'^a{}_{bc}=\frac{\partial x'^a}{\partial x^m}\frac{\partial x^p}{\partial x'^b}\frac{\partial x^q}{\partial x'^c}\,\Gamma^m{}_{pq}+\frac{\partial x'^a}{\partial x^m}\,\frac{\partial^2 x^m}{\partial x'^b\,\partial x'^c}.$$
> In particular, the inhomogeneous second-derivative term shows that $\Gamma^a{}_{bc}$ do not transform as a tensor.

> [!success] Proof
> Write $\partial'_b=(\partial x^p/\partial x'^b)\partial_p$ and use the connection axioms:
> $$\nabla_{\partial'_b}\partial'_c=\nabla_{\left(\frac{\partial x^p}{\partial x'^b}\partial_p\right)}\left(\frac{\partial x^q}{\partial x'^c}\partial_q\right)=\frac{\partial x^p}{\partial x'^b}\left(\partial_p\!\left(\frac{\partial x^q}{\partial x'^c}\right)\partial_q+\frac{\partial x^q}{\partial x'^c}\nabla_{\partial_p}\partial_q\right).$$
> Insert $\nabla_{\partial_p}\partial_q=\Gamma^m{}_{pq}\partial_m$ and express $\partial_m=(\partial x'^a/\partial x^m)\partial'_a$. Also,
> $$\partial_p\!\left(\frac{\partial x^q}{\partial x'^c}\right)=\frac{\partial x'^d}{\partial x^p}\frac{\partial^2 x^q}{\partial x'^d\,\partial x'^c}.$$
> Collect coefficients of $\partial'_a$ to obtain the stated formula.

> [!danger] What Is Tensorial Here?
> The non-tensorial behavior is exactly what makes $\nabla$ capable of cancelling the non-tensorial behavior of partial derivatives of components. This is why $\nabla T$ is a tensor whenever $T$ is a tensor.

## The Difference of Two Connections Is a Tensor

The previous proposition might look alarming at first (“we introduced $\Gamma$, and immediately it misbehaves”), but there is a stabilizing fact that is used constantly in geometry and relativity.

> [!abstract] Difference Tensor
> Let $\nabla$ and $\widetilde{\nabla}$ be two affine connections on $TM$. Define
> > $$A(X,Y):=\nabla_XY-\widetilde{\nabla}_XY.$$
> Then $A$ is $C^\infty(M)$-linear in each argument, hence defines a tensor field $A\in\Gamma(\mathsf{T}^1{}_2M)$. In coordinates,
> > $$A^k{}_{ij}=\Gamma^k{}_{ij}-\widetilde{\Gamma}^k{}_{ij},$$
> and the components $A^k{}_{ij}$ transform tensorially (no second derivatives).

> [!success] Proof
> For $f\in C^\infty(M)$,
> $$A(fX,Y)=\nabla_{fX}Y-\widetilde{\nabla}_{fX}Y=f\nabla_XY-f\widetilde{\nabla}_XY=fA(X,Y).$$
> Also,
> $$A(X,fY)=\nabla_X(fY)-\widetilde{\nabla}_X(fY)=\big(X(f)Y+f\nabla_XY\big)-\big(X(f)Y+f\widetilde{\nabla}_XY\big)=fA(X,Y).$$
> Thus $A$ is bilinear over $C^\infty(M)$. Subtracting the Christoffel transformation laws cancels the inhomogeneous second-derivative term.

> [!danger] Remark
> This simple observation is one of the main ways you build tensorial quantities from coordinate expressions. For example, in perturbative GR one often compares a physical connection to a background connection; their difference is a genuine tensor.

## Covariant Differentiation Along a Curve and Geodesics

To talk about motion, we need differentiation **along a worldline**.

> [!info] Covariant Derivative Along a Curve
> Let $\gamma:I\to M$ be a $C^{1}$ curve and let $\nabla$ be a connection. A **vector field along $\gamma$** is a map $V:I\to TM$ with $V(t)\in T_{\gamma(t)}M$.
> In coordinates, write $V=V^j(t)\partial_j|_{\gamma(t)}$ and $\dot\gamma=\dot\gamma^i(t)\partial_i|_{\gamma(t)}$. Define
> $$\frac{DV}{dt}:=\left(\frac{dV^k}{dt}+\Gamma^k{}_{ij}(\gamma(t))\,\dot\gamma^i(t)\,V^j(t)\right)\partial_k\Big|_{\gamma(t)}.$$

> [!danger] Remark
> The expression above is designed so that it is coordinate-independent; the non-tensorial transformation of $\Gamma$ cancels the extra terms coming from differentiating the transformed components $V'^a(t)$. A vector field along $\gamma$ is **parallel** if $DV/dt=0$. A curve $\gamma$ is a **geodesic** for $\nabla$ if its tangent is parallel: $D\dot\gamma/dt=0$. In GR, geodesics will represent free-fall motion once $\nabla$ is chosen to be the Levi–Civita connection of $g$.

In coordinates, the geodesic equation is
$$\ddot x^k+\Gamma^k{}_{ij}(x)\,\dot x^i\dot x^j=0.$$

You should mentally compare this to Newton’s $m\ddot{x}=0$: the extra term is “what you pay” for using a manifold (or non-inertial coordinates), and later it becomes the mathematical representation of gravity.

## A Laboratory Computation: Flat $\mathbb{R}^2$ in Polar Coordinates

This computation is the cleanest place to learn the right reflexes about Christoffel symbols. The geometry is flat and familiar, but curvilinear coordinates produce nontrivial $\Gamma$’s and nontrivial-looking equations of motion.

Let $M=\mathbb{R}^{2}\setminus\{0\}$ with Cartesian coordinates $(x,y)$ and polar coordinates $(r,\theta)$:
$$x=r\cos\theta,\quad y=r\sin\theta.$$

Consider the **flat** (standard) connection on $\mathbb{R}^2$, characterized in Cartesian coordinates by
$$\nabla_{\partial_x}\partial_x=\nabla_{\partial_x}\partial_y=\nabla_{\partial_y}\partial_x=\nabla_{\partial_y}\partial_y=0.$$

Equivalently, all Christoffel symbols vanish in the $(x,y)$ chart.

We compute the Christoffel symbols in the $(r,\theta)$ chart using the transformation formula. Since $\Gamma^m{}_{pq}=0$ in Cartesian coordinates, we get
$$\Gamma'^a{}_{bc}=\frac{\partial x'^a}{\partial x^m}\,\frac{\partial^2 x^m}{\partial x'^b\,\partial x'^c}.$$

Here $(x'^1,x'^2)=(r,\theta)$ and $(x^1,x^2)=(x,y)$.

First,
$$\frac{\partial r}{\partial x}=\cos\theta,\quad \frac{\partial r}{\partial y}=\sin\theta,\quad \frac{\partial \theta}{\partial x}=-\frac{\sin\theta}{r},\quad \frac{\partial \theta}{\partial y}=\frac{\cos\theta}{r}.$$

Second derivatives of $x(r,\theta)=r\cos\theta$ and $y(r,\theta)=r\sin\theta$ are:
$$\frac{\partial^2 x}{\partial r^2}=0,\quad \frac{\partial^2 x}{\partial r\,\partial\theta}=-\sin\theta,\quad \frac{\partial^2 x}{\partial \theta^2}=-r\cos\theta,$$
$$\frac{\partial^2 y}{\partial r^2}=0,\quad \frac{\partial^2 y}{\partial r\,\partial\theta}=\cos\theta,\quad \frac{\partial^2 y}{\partial \theta^2}=-r\sin\theta.$$

Now compute the nonzero symbols.

1. For $\Gamma^r{}_{\theta\theta}$:
   $$\Gamma^r{}_{\theta\theta}=\frac{\partial r}{\partial x}\frac{\partial^2 x}{\partial\theta^2}+\frac{\partial r}{\partial y}\frac{\partial^2 y}{\partial\theta^2}=\cos\theta(-r\cos\theta)+\sin\theta(-r\sin\theta)=-r.$$

2. For $\Gamma^\theta{}_{r\theta}$:
   $$\Gamma^\theta{}_{r\theta}=\frac{\partial \theta}{\partial x}\frac{\partial^2 x}{\partial r\,\partial\theta}+\frac{\partial \theta}{\partial y}\frac{\partial^2 y}{\partial r\,\partial\theta}=\left(-\frac{\sin\theta}{r}\right)(-\sin\theta)+\left(\frac{\cos\theta}{r}\right)(\cos\theta)=\frac{1}{r}.$$
   By symmetry of mixed partials here (and because the flat connection is torsion-free), $\Gamma^\theta{}_{\theta r}=\Gamma^\theta{}_{r\theta}=\frac{1}{r}$.

All remaining Christoffel symbols vanish.

> [!abstract] Flat Connection in Polar Coordinates
> For the standard flat connection on $\mathbb{R}^2\setminus\{0\}$, the only nonzero Christoffel symbols in polar coordinates are
> $$\Gamma^r{}_{\theta\theta}=-r,\quad \Gamma^\theta{}_{r\theta}=\Gamma^\theta{}_{\theta r}=\frac{1}{r}.$$

> [!danger] Where the “Forces” Come From
> Write the geodesic equation in polar coordinates:
> $$\ddot r+\Gamma^r{}_{ij}\dot x^i\dot x^j=0,\quad \ddot\theta+\Gamma^\theta{}_{ij}\dot x^i\dot x^j=0.$$
> Using the symbols above (with $x^1=r$, $x^2=\theta$) gives
> $$\ddot r-r\dot\theta^2=0,\quad \ddot\theta+\frac{2}{r}\dot r\,\dot\theta=0.$$
> These look like dynamics with centripetal and Coriolis-type terms, but geometrically they are just straight lines in the plane written in a curvilinear coordinate system. This is the conceptual bridge to GR: in curved spacetime, the same kind of connection terms appear, but there is no global coordinate choice that removes them everywhere.

In this lecture we introduced affine connections as the tool that makes differentiation tensorial on manifolds, and we learned how Christoffel symbols encode a choice of connection in coordinates. The key takeaway is that “forces” can be coordinate artifacts, while tensorial statements are invariant. Next we bring in a metric and single out the Levi–Civita connection as the canonical connection of GR.
