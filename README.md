# Saving DSA Assignment 1 here 

4
#include <bits/stdc++.h>
using namespace std;

int main() {
	
	long long k;
	long long l;
	long long m;
	long long n; 
	
	cin >> k >> l >> m >> n;
	
	int z = (k * l) - (m * n);
	
	cout << "Difference = " << z;
} 

5

#include <bits/stdc++.h>
using namespace std;

int main() {
	
	int s;
	int v;
	
	cin >> s >> v;
	
	int z = s % 10;
	int t = v % 10;
	
	int f = z + t;
	
	
	cout << f;
	
	
} 

6

#include <bits/stdc++.h>
using namespace std;

int main() {
	
	int k;
	int sum = 0;
	
	cin >> k;
	
	int i = k;
	while ( i > 0 ){
	    sum += i;
	    i--;
	   
	}
	
	cout << sum;
	
	
} 

