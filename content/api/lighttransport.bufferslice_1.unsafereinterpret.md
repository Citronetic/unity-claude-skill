This version of Unity is unsupported.



# [BufferSlice<T0>](LightTransport.BufferSlice_1.html).UnsafeReinterpret




                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel















## Declaration

public BufferSlice<U> UnsafeReinterpret();






### Returns



**BufferSlice<U>**
        An alias of the same slice, but reinterpreted as the target type.





### Description



Reinterpret the slice as having a different data type (type punning), but does not check if the reinterpret is valid.





Performs unchecked reinterpretation of the buffer slice to view the same memory as a different type. This method skips all validation and should only be used when you are certain the reinterpretation is valid.

**Use Cases:**



          - Performance-critical code where validation overhead is unacceptable.

          - Advanced scenarios where you need to bypass safety checks.

          - Custom type layouts that don't follow standard alignment rules.





**Warning:** This method can lead to undefined behavior, memory corruption, or crashes if used incorrectly. Prefer SafeReinterpret unless you have specific performance requirements.

Additional resources: SafeReinterpret for validated reinterpretation.


              


```
// Performance-critical reinterpretation
var floatSlice = new BufferSlice<float>(buffer, 0);// Unsafe reinterpret for maximum performance
// WARNING: No validation - ensure this is safe!
var byteSlice = floatSlice.UnsafeReinterpret<byte>();// Use with caution - misaligned access could crash
var intSlice = floatSlice.UnsafeReinterpret<int>(); // OK: same size
var doubleSlice = floatSlice.UnsafeReinterpret<double>(); // DANGEROUS: different size
```


            
