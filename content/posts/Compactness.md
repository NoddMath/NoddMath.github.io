+++
date = "2023-04-03T15:44:10-04:00"
draft = false
title = "Compactness"
categories = "Math"
ShowToc = true
tags = [ "General Topology" ]
+++

Compactness is not an especially intuitive or natural concept, but it holds a central place in topology. As someone once said, "If you don't understood compactness, you don't understood topology", and there's certainly some truth in that.
## Definition and characterizations of compactness

> [!info] Open cover
> Given a topological space $X$ and a subset $Y\subseteq X$, a collection of subsets $\{U_{\alpha}\}_{\alpha\in A}$ of $X$ is called an **open cover** of $Y$ if $\displaystyle Y\subseteq \bigcup_{\alpha\in A} U_{\alpha}$.

> [!info] Compactness
> A topological space $X$ is **compact** if every open cover of $X$ has a finite subcover. That is, for any collection $\{U_\alpha\}_{\alpha\in A}$ of open sets of $X$ with $$X\subseteq \bigcup_{\alpha\in A} U_\alpha,$$ there exists a finite subset $\{\alpha_1,\dots,\alpha_N\}\subseteq A$ such that $\displaystyle X\subseteq \bigcup_{n=1}^{N} U_{\alpha_n}$.

> [!danger] Remark
> In older sources or in the context of algebraic geometry, the term **quasi-compact** refers to what we define here as compact, while compact is reserved for spaces that are Hausdorff and compact.

> [!info] Finite intersection property (FIP)
> A collection $\mathcal{F}$ of subsets of a set $X$ has the **finite intersection property** if every finite subcollection $\{F_1,\dots,F_n\}\subseteq \mathcal{F}$ satisfies $\displaystyle \bigcap_{i=1}^n F_i\neq \emptyset$.

> [!abstract] Characterization of compactness via the FIP
> A topological space $X$ is compact if and only if for every collection $\mathcal{C}$ of closed subsets of $X$ with the FIP, $\displaystyle \bigcap_{C\in \mathcal{C}} C\neq \emptyset$.
> > [!success] Proof
> > $(\Rightarrow)$ Suppose $X$ is compact. Let $\mathcal{C}$ be a collection of closed sets with the FIP. Assume, for contradiction, that $\bigcap_{C\in \mathcal{C}} C=\emptyset$. Then $\{X\setminus C\mid C\in \mathcal{C}\}$ is an open cover of $X$ because $\bigcup_{C\in \mathcal{C}} (X\setminus C)=X\setminus \bigcap_{C\in \mathcal{C}} C=X\setminus \emptyset=X$. By compactness, there exists a finite subcover $\{X \setminus C_1, \dots, X \setminus C_n\}$ such that: $$\bigcup_{i=1}^n (X \setminus C_i) = X \implies \bigcap_{i=1}^n C_i=\emptyset.$$
  This contradicts the FIP of $\mathcal{C}$. Thus, $\bigcap_{C \in \mathcal{C}} C \neq \emptyset$.  

$(\Leftarrow)$ Suppose every collection of closed sets with the FIP has non-empty intersection. Let $\mathcal{U}$ be an open cover of $X$. Then $\mathcal{C} = \{X \setminus U \mid U \in \mathcal{U}\}$ is a collection of closed sets. Since $\mathcal{U}$ covers $X$:  
$$\bigcap_{C \in \mathcal{C}} C = \bigcap_{U \in \mathcal{U}} (X \setminus U) = X \setminus \left( \bigcup_{U \in \mathcal{U}} U \right) = \emptyset.$$
  By the contrapositive, $\mathcal{C}$ lacks the FIP, so there exist $C_1, \dots, C_n \in \mathcal{C}$ with $\bigcap_{i=1}^n C_i = \emptyset$.

Thus: $$\bigcap_{i=1}^n (X\setminus U_i)=\emptyset\implies \bigcup_{i=1}^n U_i=X,$$so $\{U_1, \dots, U_n\}$ is a finite subcover of $\mathcal{U}$. Hence, $X$ is compact.

> [!abstract] Characterization of compactness via nets
> A space $X$ is compact if and only if every net in $X$ has a convergent subnet.

> [!abstract] Characterization of compactness via filters
> A space $X$ is compact if and only if every filter on $X$ has a cluster point.
## Properties of compact spaces

> [!abstract] Basic properties of compact spaces
> $(a)$ A closed subset of a compact space is compact.
> 
> $(b)$ The image of a compact space under a continuous map is compact.
> > [!success] Proof
> > $(a)$ Let $X$ be a compact space, $F$ a closed subset of $X$, and $\{U_i\}_{i\in I}\subseteq X$ an open cover of $F$. Then $\{U_i\}_{i\in I}\cup \{X\setminus F\}$ is an open cover of $X$. By compactness of $X$, there exists a finite subcover $$X=U_{i_1}\cup \cdots\cup U_{i_k}\cup (X\setminus F)\quad (\text{possibly excluding }X\setminus F).$$
> > 
> > Since $F\cap (X\setminus F)=\emptyset$, we have $F\subseteq U_{i_1} \cup \cdots \cup U_{i_k}$. Hence, $\{U_{i_1},\dots,U_{i_k}\}$ is a finite subcover of $F$, implying that $F$ is compact.
> > 
> > $(b)$

Let $f:X\to Y$ be a continuous map between topological spaces, with $X$ compact. Let $\{V_i\}_{i \in I}$ be an open cover of $f(X)$ (with $V_i$ open in $Y$). Since $f$ is continuous, $\{f^{-1}(V_i)\}_{i\in I}$ is an open cover of $X$ because:
$$X=f^{-1}(f(X))\subseteq f^{-1}\left(\bigcup_{i\in I} V_i\right)=\bigcup_{i\in I} f^{-1}(V_i).$$
By compactness of $X$, there exists a finite subcover:
$$X=f^{-1}(V_{i_1})\cup\cdots \cup f^{-1}(V_{i_n}).$$
Applying $f$ to both sides to get $f(X)\subseteq V_{i_1}\cup \cdots\cup V_{i_n}$. Thus, $\{V_{i_1}, \dots, V_{i_n}\}$ is a finite subcover of $f(X)$, so $f(X)$ is compact.


Since $X$ is Hausdorff, for each point $a\in A$ there exist disjoint open sets $U_a$ and $V_a$ in $X$ such that $a\in U_a$ and $B\subseteq V_a$. Since $A$ is a closed subset of a compact set, it is also compact. Note that the family $\{U_a:a\in A\}$ is an open cover of $A$, so by compactness, we can choose finitely many points $a_1,\dots,a_n\in A$ such that
$$A\subseteq \bigcup_{i=1}^n U_{a_i}.$$
Set $$U=\bigcup_{i=1}^n U_{a_i},\quad V=\bigcap_{i=1}^n V_{a_i}.$$Then
   * $U$ is open and contains $A$.
   * $V$ is open and contains $B$.
   * $U\cap V = \varnothing$, since each $U_{a_i}\cap V_{a_i}=\varnothing$ and $\bigcup_i U_{a_i}\cap\bigcap_i V_{a_i} \subseteq U_{a_i}\cap V_{a_i}$ for each $i$.

Hence, $X$ is normal.

> [!info] Filter
> A **filter** $\mathcal{F}$ on a set $X$ is a collection of subsets of $X$ satisfying:
> - $\emptyset\notin \mathcal{F}$.
> - If $A,B\in \mathcal{F}$, then $A\cap B\in \mathcal{F}$.
> - If $A\in \mathcal{F}$ and $A\subseteq B\subseteq X$, then $B\in \mathcal{F}$.

> [!abstract] Compactness combined with the $T_2$ axiom
> $(a)$ Every compact subset of a Hausdorff space is closed.
> 
> $(b)$ Given a compact space $X$ and a Hausdorff space $Y$, if there exists a bijective continuous map $f:X\to Y$, then $f$ must be a homeomorphism.
> 
> $(c)$ Every compact Hausdorff space is normal.
> > [!success] Proof
> > $(a)$ Let $X$ be a Hausdorff space and $K\subseteq X$ a compact subset. Take $x\in X\setminus K$ arbitrarily. Since $X$ is Hausdorff, for each $y\in K$ there exist an open neighborhood $U_k$ of $y$ and an open neighborhood $V_k$ of $x$ with $U_k\cap V_k=\emptyset$.
> > 
> > The collection $\{U_k:k\in K\}$ is an open cover of the compact set $K$, so by compactness we can choose finitely many points $k_1,\dots,k_n\in K$ such that $K\subset \bigcup_{i=1}^n U_{k_i}$. Then $V=\bigcap_{i=1}^n V_{k_i}$ is still an open neighborhood of $x$, which is disjoint from $\bigcup_{i=1}^n U_{k_i}$.  Thus, $V\cap K=\emptyset$. Since every $x\in X\setminus K$ has an open neighborhood disjoint from $K$, $X\setminus K$ is open. Therefore, $K$ is closed.
> > 
> > $(b)$ Let $f:X\to Y$ be a continuous bijection between topological spaces, where $X$ is compact and $Y$ is Hausdorff. Let $C$ be a closed subset of $X$.
> > 
> > Since $X$ is compact, $C$ is compact. By continuity of $f$, the image $f(C)$ is compact in $Y$. By part (a), compact subsets of the Hausdorff space $Y$ are closed. Thus, $f(C)$ is closed in $Y$. Note that $f$ sends closed sets to closed sets, so $f^{-1}$ preserves open sets and is continuous.  Being a continuous bijection with continuous inverse, $f$ is a homeomorphism.
> > 
> > $(c)$ Let $X$ be a compact Hausdorff space and $A,B\subseteq X$ two disjoint closed sets.
## Precompactness

> [!info] Precompactness
> Given a topological space $X$, a subset $Y\subseteq X$ is called **precompact** or **relatively compact** if its closure $\overline{Y}$ is compact.  

> [!danger] Remark
> The term "precompactness" has two common meanings in English: one refers to total boundedness, while the other refers to relative compactness. To avoid ambiguity, we use it exclusively in the latter sense.

