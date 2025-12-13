+++
date = "2025-04-06T15:44:10-04:00"
draft = false
title = "From Riemannian Geometry to Relativistic Language"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++

> [!info] Overall Goal of Phase 0
> We assume the reader is comfortable with smooth manifolds, Riemannian metrics, Levi–Civita connections, and curvature, but may know essentially no physics (no special relativity, no classical mechanics).
>
> The aim of this phase is:
> - to build a **dictionary** between the language used by mathematicians and that used by relativists;
> - to explain what changes when one passes from **Riemannian** to **Lorentzian** geometry;
> - to set up the basic conventions that we will follow throughout the notes.

## 0.1 A dictionary between mathematicians and relativists

The first source of confusion is not the concepts, but the **vocabulary and conventions**. Here we collect the most important ones.

### 0.1.1 Units and physical constants

> [!info] Natural Units
> In most of these notes we will adopt **natural units**, in which the speed of light $c$ is set equal to $1$:
> $$c=1.$$
> When convenient, we may also set the gravitational constant $G = 1$. In such units, time and space coordinates have the same units, and mass, length and time are related by fixed conversion factors.

Concretely, in standard SI units:
- $c\approx 3\times 10^8 \,\text{m/s}$;
- setting $c = 1$ means that distances and times are measured in the same units (for example, one may measure everything in meters, with one second corresponding to $c$ meters).

> [!important] Mathematical Takeaway
> - You should think of $c$ as just a positive constant which appears in the metric on Minkowski spacetime.
> - Setting $c = 1$ is simply a **choice of units** that simplifies formulas: it is not a deep physical assumption.

We will occasionally restore factors of $c$ or $G$ when checking dimensions or comparing with physics literature, but for most of the mathematical development we work with $c = 1$.

### 0.1.2 Indices, summation convention, and tensor components

In differential geometry, one often writes vector fields as linear combinations of basis vector fields, and covector fields as linear combinations of basis $1$-forms. In relativity, this is done heavily in **index notation**.

Let $M$ be a smooth manifold of dimension $n$, with local coordinates $(x^0,x^1,\dots,x^{n-1})$. In relativity, one typically reserves the index $0$ for a **time coordinate** and $1,2,3$ for spatial coordinates in the $4$-dimensional case.

> [!info] Index Ranges
> - Greek indices $\mu,\nu,\rho,\sigma,\dots$ usually run from $0$ to $3$ (for a $4$-dimensional spacetime).
> - Latin indices $i,j,k,\dots$ often run from $1$ to $3$, indicating spatial directions.
> - Summation convention: whenever an index appears once as an upper index and once as a lower index in a term, **we sum over it**.

For example, if $\{ \partial_\mu \}$ denotes the coordinate vector fields and $\{ \mathrm{d}x^\mu \}$ the dual coframe, then a vector field $X$ and a covector field $\alpha$ can be written as
$$X = X^\mu \partial_\mu, \qquad \alpha = \alpha_\mu \mathrm{d}x^\mu.$$
Here the index $\mu$ is summed over $0,1,2,3$.

> [!example] Example: Metric Components
> Let $g$ be a (Lorentzian) metric, with components $g_{\mu\nu} = g(\partial_\mu, \partial_\nu)$.
> For a vector field $X = X^\mu \partial_\mu$ and another vector field $Y = Y^\nu \partial_\nu$, one writes
> $$g(X,Y) = g_{\mu\nu} X^\mu Y^\nu.$$
> By the summation convention, this means
> $$g(X,Y) = \sum_{\mu=0}^3 \sum_{\nu=0}^3 g_{\mu\nu} X^\mu Y^\nu.$$

### 0.1.3 Covariant and contravariant indices; raising and lowering

In Riemannian geometry, a metric $g$ identifies the tangent and cotangent spaces: given a vector $X$, we obtain a covector $X^\flat = g(X,\cdot)$. In coordinates, this is expressed via **raising and lowering indices**.

Let $g_{\mu\nu}$ denote the components of the metric, and let $(g^{\mu\nu})$ denote the inverse matrix. Then for a vector $X$ and a covector $\alpha$, their components are related by
$$X_\mu=g_{\mu\nu} X^\nu,\quad \alpha^\mu = g^{\mu\nu} \alpha_\nu.$$

> [!info] Raising and Lowering
> - A **contravariant** index is an upper index, e.g. $X^\mu$.
> - A **covariant** index is a lower index, e.g. $X_\mu$.
> - The metric $g_{\mu\nu}$ and its inverse $g^{\mu\nu}$ provide isomorphisms
> $$X_\mu = g_{\mu\nu} X^\nu,\quad X^\mu = g^{\mu\nu} X_\nu.$$
> - The same applies to higher-rank tensors.

In physics language, one often speaks loosely of “covariant” and “contravariant” **vectors**, but mathematically one should keep in mind that there is only one tangent space, and the metric provides an isomorphism between vectors and covectors.

> [!danger] Convention Warning
> In relativity, the **signature** of the metric means that raising and lowering indices does not preserve the sign of the norm. For example, in a metric of signature $(- + + +)$,
> $$X^\mu X_\mu = g_{\mu\nu} X^\mu X^\nu$$
> can be negative, zero, or positive, even for nonzero $X$. This is a crucial difference from the positive-definite Riemannian case.

### 0.1.4 Metric signatures and sign conventions

A Riemannian metric on an $n$-dimensional manifold is a smooth family of **positive definite** inner products on each tangent space. In relativity, the spacetime metric is **indefinite**: one time direction and three space directions.

> [!info] Lorentzian Signature
> A metric $g$ on a $4$-dimensional manifold $M$ is said to have **Lorentzian signature** if, at each point $p \in M$, the bilinear form $g_p$ on $T_pM$ has signature
> $$(-,+,+,+) \quad \text{or} \quad (+,-,-,-).$$

Both conventions appear in the literature. We will adopt the **mostly plus** convention:

> [!important] Convention
> Throughout these notes, we take the metric signature to be
> $$(-,+,+,+),$$
> meaning that timelike vectors have **negative** squared norm.

Concretely, on flat Minkowski spacetime $\mathbb{R}^4$ with coordinates $(t,x,y,z)$, the standard Minkowski metric is
$$\eta=-\mathrm{d}t^2 + \mathrm{d}x^2 + \mathrm{d}y^2 + \mathrm{d}z^2.$$

> [!danger] Common Pitfall
> Different authors make different choices:
> - some use $(-,+,+,+)$,
> - others use $(+,-,-,-)$.
>
> This affects the sign of:
> - the norm of timelike vectors;
> - various curvature conventions (e.g. the sign of the Ricci tensor);
> - the Einstein tensor $G_{\mu\nu}$.
>
> When comparing formulas with the literature, one must always check the **signature convention**.

### 0.1.5 Tensors, forms, and fields in physicists’ notation

Mathematicians often write tensors as elements of $T^r_s(M)$, while physicists almost always use index notation. Let us fix the translation.

> [!info] Tensor Type and Indices
> - A tensor of type $(r,s)$ (with $r$ contravariant indices and $s$ covariant indices) is written in components as
>   > $$T^{\mu_1 \dots \mu_r}{}_{\nu_1 \dots \nu_s}.$$
> - For example:
>   - a vector field $X$ is $X^\mu$ (type $(1,0)$);
>   - a covector field $\alpha$ is $\alpha_\mu$ (type $(0,1)$);
>   - the metric $g$ is $g_{\mu\nu}$ (type $(0,2)$);
>   - the Riemann curvature tensor is $R^\rho{}_{\sigma\mu\nu}$ (type $(1,3)$).

Differential forms are antisymmetric covariant tensors. A $2$-form $F$ has components $F_{\mu\nu}$ such that
$$
F = \tfrac{1}{2} F_{\mu\nu} \,\mathrm{d}x^\mu \wedge \mathrm{d}x^\nu,
\qquad
F_{\mu\nu} = - F_{\nu\mu}.
$$
In relativity, the electromagnetic field is represented by a $2$-form $F$, or equivalently by the antisymmetric components $F_{\mu\nu}$.

> [!example] Example: Contraction in Indices
> If $X = X^\mu \partial_\mu$ is a vector field and $F$ is a $2$-form, then the interior product $i_X F$ has components
> > $$(i_X F)_\nu = X^\mu F_{\mu\nu}.$$
> This is an example of the way tensor operations look in index notation.

---

### 0.1.6 Worldlines, observers, and four-velocity

Physicists constantly refer to **observers**, **worldlines**, and **four-velocity**. Mathematically, all of these notions can be phrased in familiar geometric terms.

> [!info] Worldline and Observer
> - A **worldline** is a smooth curve $\gamma : I \to M$ in spacetime, where $I \subset \mathbb{R}$ is an interval.
> - A **(physical) observer** is modelled by a future-directed **timelike** worldline, parametrized by its **proper time** $\tau$.
> - The **four-velocity** of the observer is the tangent vector field $\dot{\gamma}(\tau) = \dfrac{\mathrm{d}\gamma}{\mathrm{d}\tau}(\tau)$ along $\gamma$.

In our signature convention $(- + + +)$, timelike vectors have negative squared norm. For a timelike worldline parametrized by proper time, the four-velocity $U = \dot{\gamma}(\tau)$ satisfies
$$g(U,U) = -1.$$

> [!example] Example: Proper Time Normalization in Minkowski Space
> In Minkowski spacetime $(\mathbb{R}^4,\eta)$ with $\eta = -\mathrm{d}t^2 + \mathrm{d}x^2 + \mathrm{d}y^2 + \mathrm{d}z^2$, a timelike curve
> $$\gamma(\tau) = \bigl(t(\tau), x(\tau), y(\tau), z(\tau)\bigr)$$
> satisfies
> > $$\eta(\dot{\gamma}, \dot{\gamma})
> = -\left(\frac{\mathrm{d}t}{\mathrm{d}\tau}\right)^2
>  + \left(\frac{\mathrm{d}x}{\mathrm{d}\tau}\right)^2
>  + \left(\frac{\mathrm{d}y}{\mathrm{d}\tau}\right)^2
>  + \left(\frac{\mathrm{d}z}{\mathrm{d}\tau}\right)^2
>  = -1.$$
> This is just the geometric version of the usual relation between coordinate time and proper time in special relativity.

> [!question] Exercise (Conceptual)
> Let $\gamma$ be a timelike worldline parametrized by proper time $\tau$, with four-velocity $U = \dot{\gamma}(\tau)$. Show that if $f : M \to \mathbb{R}$ is a scalar field (e.g. a temperature field, a potential, etc.), then the rate of change of $f$ as measured by the observer is simply
> > $$\frac{\mathrm{d}}{\mathrm{d}\tau} f(\gamma(\tau)) = (U f)(\gamma(\tau)) = U^\mu \partial_\mu f\bigl(\gamma(\tau)\bigr).$$
> In other words, the usual directional derivative along the vector $U$.

---

## 0.2 From Riemannian to Lorentzian geometry: minimal modifications

We now explain precisely what is changed when one goes from Riemannian to Lorentzian geometry, and which constructions remain identical.

### 0.2.1 Definition of a Lorentzian manifold

> [!info] Lorentzian Manifold
> A **Lorentzian manifold** is a pair $(M,g)$ where:
> - $M$ is a smooth manifold of dimension $n$;
> - $g$ is a smooth symmetric $(0,2)$-tensor field on $M$ such that for every $p \in M$, the bilinear form
>   > $$g_p : T_pM \times T_pM \to \mathbb{R}$$
>   has signature $(- + \dots +)$, i.e. one negative and $n-1$ positive eigenvalues.

In relativity, $n=4$ is the physically relevant dimension, but many constructions work in arbitrary dimension.

> [!danger] Positivity vs Indefiniteness
> In Riemannian geometry, $g_p$ is **positive definite**, so every nonzero tangent vector has strictly positive squared length. This allows one to define a genuine **distance function** on $M$.
>
> In Lorentzian geometry, $g_p$ is **indefinite**. The squared length $g_p(v,v)$ of a vector $v\in T_pM$ can be negative, zero, or positive. This destroys the usual notion of Riemannian distance, but creates a rich **causal structure**.

---

### 0.2.2 Timelike, spacelike, and null vectors

The indefinite signature of the metric leads to a natural classification of tangent vectors.

> [!info] Causal Character of Vectors
> Let $(M,g)$ be a Lorentzian manifold. For a nonzero vector $v \in T_pM$:
> - $v$ is **timelike** if $g_p(v,v) < 0$;
> - $v$ is **null** or **lightlike** if $g_p(v,v) = 0$;
> - $v$ is **spacelike** if $g_p(v,v) > 0$.
> The zero vector is sometimes called **zero** or **null**, but one usually excludes it when classifying vectors by causal character.

In our signature convention $(- + + +)$, timelike vectors have negative squared norm. In the opposite convention $(+ - - -)$, the inequalities are reversed.

> [!example] Minkowski Spacetime
> In flat Minkowski spacetime $(\mathbb{R}^4,\eta)$ with
> > $$\eta = -\mathrm{d}t^2 + \mathrm{d}x^2 + \mathrm{d}y^2 + \mathrm{d}z^2,$$
> a vector $v = (v^0, v^1, v^2, v^3)$ is:
> - timelike if
>   > $$- (v^0)^2 + (v^1)^2 + (v^2)^2 + (v^3)^2 < 0;$$
> - null if the above expression is $0$;
> - spacelike if it is $> 0$.

> [!important] Geometric Picture
> At each point $p \in M$, the set of null vectors in $T_pM$ forms a **double cone** (the light cone); the timelike vectors lie strictly inside the cone, and the spacelike vectors lie outside.
> This is the local model for the causal structure of spacetime.

---

### 0.2.3 Time orientation

In Riemannian geometry, there is no intrinsic distinction between “future” and “past”. In Lorentzian geometry, one often wants to distinguish **future-directed** from **past-directed** timelike vectors.

> [!info] Time Orientation
> A Lorentzian manifold $(M,g)$ is **time-orientable** if there exists a smooth timelike vector field $T$ on $M$.
>
> Given such a field $T$, a timelike vector $v$ at $p$ is called:
> - **future-directed** if $g_p(v,T_p) < 0$ (in our signature convention);
> - **past-directed** if $g_p(v,T_p) > 0$.
>
> A null vector is future-directed if it can be approximated arbitrarily well by future-directed timelike vectors (and similarly for past-directed).

A choice of a globally defined future-directed timelike vector field $T$ defines a **time orientation** on $M$. Time-orientability is analogous to orientability in Riemannian geometry, but adapted to the causal structure.

> [!example] Minkowski Spacetime
> In Minkowski spacetime with coordinates $(t,x,y,z)$, the coordinate vector field
> > $$T = \frac{\partial}{\partial t}$$
> is timelike. Declaring $T$ to be **future-directed** equips $(\mathbb{R}^4,\eta)$ with a natural time orientation.

> [!question] Exercise
> Show that if $(M,g)$ admits two smooth timelike vector fields $T$ and $T'$, and they always lie in the same connected component of the timelike cone at each point (i.e. they never become opposite), then they define the **same** time orientation.

---

### 0.2.4 Lorentzian vs Riemannian: what survives unchanged?

Surprisingly much of Riemannian geometry carries over verbatim to the Lorentzian setting.

> [!info] Structures That Survive
> For a Lorentzian metric $g$, we still have:
> - a unique **Levi–Civita connection** $\nabla$, characterized by:
>   - torsion-free: $\nabla_X Y - \nabla_Y X = [X,Y]$,
>   - metric compatibility: $X\bigl(g(Y,Z)\bigr) = g(\nabla_X Y, Z) + g(Y,\nabla_X Z)$;
> - **geodesics**, defined as curves $\gamma$ satisfying $\nabla_{\dot{\gamma}} \dot{\gamma} = 0$;
> - curvature tensors:
>   - Riemann curvature $R(X,Y)Z$,
>   - Ricci tensor $\operatorname{Ric}$,
>   - scalar curvature $R$ (often denoted $\operatorname{Scal}$ in mathematical texts, but commonly written $R$ in relativity);
> - local existence of **orthonormal frames**, now adapted to the Lorentzian signature.

Several standard theorems, such as the existence and uniqueness of the Levi–Civita connection, rely only on the **symmetry** and **nondegeneracy** of the metric, and not on its definiteness. Hence they remain true in the Lorentzian case.

> [!example] Orthonormal Frames
> At each point $p \in M$, one can choose a basis of $T_pM$,
> > $$\{ e_0, e_1, e_2, e_3 \},$$
> such that
> > $$g_p(e_0,e_0) = -1,\qquad g_p(e_i,e_i) = 1 \text{ for } i=1,2,3,\qquad g_p(e_\mu, e_\nu)=0 \text{ for } \mu \neq \nu.$$
> A smooth choice of such frames in a neighborhood of $p$ gives a local **orthonormal frame field** adapted to the Lorentzian structure.

---

### 0.2.5 Lorentzian vs Riemannian: what fundamentally changes?

On the other hand, several central notions of Riemannian geometry fail or need to be replaced.

> [!danger] Distance vs Causal Structure
> - In Riemannian geometry, one defines the **length** of a curve from its speed and obtains a **distance function** by taking the infimum of lengths of curves joining two points.
> - In Lorentzian geometry, the sign of $g(\dot{\gamma},\dot{\gamma})$ depends on the causal character of $\dot{\gamma}$. For timelike curves, one defines **proper time** along the curve, and the physically relevant quantity is often the **maximum** proper time between events, not the minimum.
>
> There is no natural symmetric distance function $d : M \times M \to [0,\infty)$ inducing the manifold topology.

Instead of distance, Lorentzian geometry focuses on **causal relations** between points.

> [!info] Causal Relations (Preliminary)
> Given a time orientation on $(M,g)$, one defines:
> - $p \ll q$ if there exists a future-directed **timelike** curve from $p$ to $q$;
> - $p \leq q$ (sometimes $p \prec q$) if there exists a future-directed **causal** (i.e. timelike or null) curve from $p$ to $q$ or $p=q$.
>
> For $p \in M$, the sets
> > $$I^+(p) = \{ q \in M : p \ll q \},\qquad J^+(p) = \{ q \in M : p \leq q \}$$
> are called the **chronological** and **causal future** of $p$, respectively.

Later, this causal structure will play a central role in global results such as singularity theorems and properties of black holes.

> [!danger] Geodesics and Extremal Properties
> In Riemannian geometry:
> - geodesics locally **minimize** length (under suitable hypotheses);
> - distance is defined as the infimum of lengths.
>
> In Lorentzian geometry:
> - timelike geodesics locally **maximize** proper time among nearby timelike curves joining the same endpoints (again, under suitable conditions);
> - null geodesics are extremal for the null interval, but there is no symmetric distance function.
>
> Thus, the variational picture must be reformulated in terms of **causal** and **chronological** relations.

---

### 0.2.6 Simple model: product spacetimes

To make the transition from Riemannian to Lorentzian geometry more concrete, it is useful to look at a simple but important class of spacetimes.

> [!example] Static Product Model
> Let $(\Sigma, h)$ be a Riemannian $3$-manifold. Consider the product manifold
> > $$M = \mathbb{R} \times \Sigma$$
> with coordinates $(t,x)$, where $t \in \mathbb{R}$ and $x \in \Sigma$.
>
> Define a metric on $M$ by
> > $$g = -\alpha(x)^2 \,\mathrm{d}t^2 + h_{ij}(x) \,\mathrm{d}x^i \mathrm{d}x^j,$$
> where $\alpha : \Sigma \to (0,\infty)$ is a smooth positive function, and $h_{ij}$ are the components of $h$ in local coordinates on $\Sigma$.
>
> Then $(M,g)$ is a Lorentzian manifold called a **static spacetime** if $\partial_t$ is a timelike Killing vector field.

Here we see explicitly how a **Riemannian** metric $h$ on $\Sigma$ is promoted to a **spatial part** of a Lorentzian metric on $M$. Many physically interesting spacetimes can be written in such a form, at least in some coordinate systems.

> [!example] Examples
> - Minkowski spacetime corresponds to $\Sigma = \mathbb{R}^3$ with Euclidean metric $h = \mathrm{d}x^2 + \mathrm{d}y^2 + \mathrm{d}z^2$ and $\alpha(x) \equiv 1$.
> - Certain static black hole spacetimes can also be expressed in this product form (though often only outside some region, e.g. outside the event horizon).

### 0.2.7 Summary of the minimal modifications

> [!important] Summary: Riemannian $\to$ Lorentzian
> For a reader already comfortable with Riemannian geometry, the step to Lorentzian geometry can be summarized as:
> - Replace **positive-definite** inner products by **indefinite** inner products of signature $(- + + +)$.
> - Introduce the classification of vectors and curves into **timelike**, **spacelike**, and **null**.
> - Choose a **time orientation**, so that one can talk about **future-directed** and **past-directed** directions.
> - Keep the Levi–Civita connection, geodesics, and curvature tensors essentially unchanged as definitions.
> - Replace **distance** and length-minimization by **causal relations** and proper time maximization along timelike curves.
>
> These modifications are minimal but profound: they encode the basic physical principle that spacetime has a causal structure, with lightcones and a distinguished time direction, rather than being a purely Riemannian manifold.

In the next phase, we will build on this Lorentzian framework to formulate **special relativity** in geometric language and then generalize it to **general relativity**, where the Lorentzian metric itself becomes dynamical via Einstein’s equations.
