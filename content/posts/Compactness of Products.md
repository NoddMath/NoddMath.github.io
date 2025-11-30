+++
date = "2023-05-18T15:44:10-04:00"
draft = false
title = "Compactness of Products"
categories = "Math"
ShowToc = true
tags = [ "General Topology" ]
+++

I once considered lumping several compactness-related theorems into a single article, but eventually realized that approach wouldn't do them justice. In particular, Tychonoff's theorem connects with many other concepts and provides a rich, unified picture of compactness in product spaces, along with several other valuable ideas worth exploring.

Throughout this article, all products of topological spaces are assumed to be equipped with the product topology.
## Tube lemma and compactness of finite products

Let's begin with the tube lemma.

> [!note] Tube lemma
> Let $X$ and $Y$ be topological spaces with $Y$ compact. Given a point $x\in X$, if $N$ is an open set in $X\times Y$ containing $\{x\}\times Y$, then there exists an open neighborhood $U$ of $x$ in $X$ such that $U\times Y\subseteq N$.
> > [!success] Proof
> > Since $N$ is open and contains $\{x\} \times Y$, for each $y \in Y$, there exist open sets $U_y \subseteq X$ and $V_y \subseteq Y$ such that $(x,y) \in U_y \times V_y \subseteq N$, by the definition of the product topology. The collection $\{V_y\}_{y \in Y}$ is an open cover of $Y$. As $Y$ is compact, there exists a finite subcover $\{V_{y_1}, V_{y_2}, \dots, V_{y_n}\}$ for some $y_1,y_2,\dots,y_n\in Y$ with $\bigcup_{i=1}^nV_{y_i}=Y$.
> > 
> > Set $U = \bigcap_{i=1}^n U_{y_i}$. Since each $U_{y_i}$ is open and contains $x$, their finite intersection $U$ is an open neighborhood of $x$. Take any $(u,y)\in U\times Y$. Since $\{V_{y_i}\}_{i=1}^n$ covers $Y$, there exists $i$ such that $y \in V_{y_i}$. Then $u\in U\subseteq U_{y_i}$, so $(u,y)\in U_{y_i}\times V_{y_i}\subseteq N$. Thus, $U\times Y\subseteq N$, as required.

> [!danger] Remark
> In the same context as above, $\{x\}\times Y$ is called a **slice**, and $U\times Y$ is called a **tube**. This is where the name of the lemma comes from.

> [!abstract] Compactness of the product of two spaces
> If $X$ and $Y$ are compact spaces, then $X\times Y$ is compact.
> > [!success] Proof

Let $\mathcal{U} = \{U_i\}_{i \in I}$ be an open cover of $X \times Y$. For each $x \in X$, the set $\{x\} \times Y$ is compact (since it is homeomorphic to $Y$, and $Y$ is compact). Thus, there exists a finite subset $J_x \subseteq I$ such that $\{x\} \times Y \subseteq \bigcup_{i \in J_x} U_i$. Let $N_x = \bigcup_{i \in J_x} U_i$, which is open and contains $\{x\} \times Y$.  

By the Tube Lemma (with $Y$ compact), there exists an open neighborhood $W_x$ of $x$ in $X$ such that $W_x \times Y \subseteq N_x$. The collection $\{W_x\}_{x \in X}$ is an open cover of $X$. Since $X$ is compact, there exists a finite subcover $\{W_{x_1}, W_{x_2}, \dots, W_{x_m}\}$ for some $x_1, x_2, \dots, x_m \in X$.  

For each $k = 1, 2, \dots, m$, $W_{x_k}\times Y\subseteq N_{x_k}=\bigcup_{i\in J_{x_k}} U_i$. Therefore,  
$$X\times Y=\bigcup_{k=1}^m (W_{x_k}\times Y)\subseteq \bigcup_{k=1}^m \bigcup_{i \in J_{x_k}} U_i.$$
The right-hand side is a finite union of the finite sets $J_{x_k}$, so it is a finite subcover of $\mathcal{U}$. Hence, $X \times Y$ is compact.

By induction, we arrive at the following corollary.

> [!idea] Compactness of the product of finite spaces
> If $X_1,X_2,\cdots,X_k$ are compact spaces, then $X_1\times X_2\times \cdots\times X_k$ is compact.

At this point, it's natural to wonder whether this result can be extended to infinite products? The answer is yes, but the proof... isn't that simple.
## Alexander subbase theorem and... the axiom of choice?

Before we introduce Tychonoff's theorem, let's look at another theorem that will be very helpful: Alexander subbasis theorem. Its proof is nontrivial and requires the axiom of choice.

> [!note] Alexander subbase theorem
> Let $X$ be a topological space with a subbase $\mathcal{S}$. Then $X$ is compact if and only if every open cover of $X$ by elements of $\mathcal{S}$ has a finite subcover.
> > [!success] Proof


Let $X$ be a topological space with subbase $\mathcal S$. Then $X$ is compact iff every open cover of $X$ by members of $\mathcal S$ has a finite subcover.

  

The "only if" direction is immediate: compactness gives a finite subcover for every open cover, in particular for those by $\mathcal S$.

  

For the converse, assume:

  

> Every cover of $X$ by members of $\mathcal S$ admits a finite subcover.  \hfill$(\ast)$

  

We will show (by the closed-sets FIP criterion) that every family of closed sets with the finite intersection property (FIP) has nonempty intersection.

  

Let ${F_i}_{i\in I}$ be closed in $X$ and have the FIP. Suppose toward a contradiction that $\bigcap_{i\in I}F_i=\varnothing$. Then ${X\setminus F_i}_{i\in I}$ is an open cover of $X$.

  

Fix $i\in I$. Since the finite intersections of elements of $\mathcal S$ form a base, for each $x\in X\setminus F_i$ there exists a basic neighborhood

$$

B_x=\bigcap_{j=1}^{n_x} S_{xj}\quad(S_{xj}\in\mathcal S)

$$

with $x\in B_x\subset X\setminus F_i$. Choose **one** subbasic set among these, say $S_{x1}$, and collect them:

$$

\mathcal S_i:={,S_{x1}:x\in X\setminus F_i,}\subset\mathcal S.

$$

By construction, $\bigcup\mathcal S_i=X\setminus F_i$. Hence

$$

\mathcal U:=\bigcup_{i\in I}\mathcal S_i\subset\mathcal S

$$

is a cover of $X$ (because $\bigcap_i F_i=\varnothing$).

  

By $(\ast)$ there are $S_1,\dots,S_m\in\mathcal U$ with $X=\bigcup_{k=1}^m S_k$. For each $k$ there is some index $i(k)$ such that $S_k\subset X\setminus F_{i(k)}$. Therefore

$$

X=\bigcup_{k=1}^m S_k\subset \bigcup_{k=1}^m (X\setminus F_{i(k)})\quad\Longrightarrow\quad \bigcap_{k=1}^m F_{i(k)}=\varnothing,

$$

contradicting the FIP of ${F_i}_{i\in I}$. Hence our assumption was false, and $\bigcap_{i\in I}F_i\neq\varnothing$.

  

By the FIP characterization of compactness, $X$ is compact.
## Tychonoff's theorem and more

At this point, we have proved the following beautiful and surprising result.

> [!important] Tychonoff's theorem is equivalent to the axiom of choice.
## Exercises

> [!question] Problem 1
> Prove the generalized tube lemma:
> 
> Given topological spaces $X$ and $Y$, let $A$ be a compact subset of $X$ and $B$ a compact subset of $Y$. If $N$ is an open set in $X\times Y$ containing $A\times B$, then there exists $U$ open in $X$ and $V$ open in $Y$ such that $A\times B\subseteq U\times V\subseteq N$.

> [!question] Problem 2
> Let $X_1,X_2,\cdots,X_k$ be sequentially compact spaces. Show that $X_1\times X_2\times \cdots\times X_k$ is sequentially compact.

> [!question] Problem 3
> Let $X_1,X_2,\cdots,X_k$ be locally compact spaces. Show that $X_1\times X_2\times \cdots\times X_k$ is locally compact.

