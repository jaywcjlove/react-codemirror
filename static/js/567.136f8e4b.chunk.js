(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[567],{919:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default='# Number Literals\n0 12345\n12kb 12mb 12gB 12Tb 12PB 12L 12D 12lkb 12dtb\n1.234 1.234e56 1. 1.e2 .2 .2e34\n1.2MB 1.kb .1dTb 1.e1gb\n0x1 0xabcdef 0x3tb 0xelmb\n\n# String Literals\n\'Literal escaping\'\'\'\n\'Literal $variable\'\n"Escaping 1`""\n"Escaping 2"""\n"Escaped `$variable"\n"Text, $variable and more text"\n"Text, ${variable with spaces} and more text."\n"Text, $($expression + 3) and more text."\n"Text, $("interpolation \\$("inception")") and more text."\n\n@"\nMultiline\nstring\n"@\n# --\n@"\nMultiline\nstring with quotes "\'\n"@\n# --\n@\'\nMultiline literal\nstring with quotes "\'\n\'@\n\n# Array and Hash literals\n@(\'a\', \'b\', \'c\')\n@{ \'key\': \'value\' }\n\n# Variables\n$Variable = 5\n$global: variable = 5\n${ Variable with spaces} = 5\n\n# Operators\n  = += -= *= /= %=\n++ -- .. - f * / % + -\n  - not! - bnot\n  - split - isplit - csplit\n  - join\n  - is - isnot - as\n  - eq - ieq - ceq - ne - ine - cne\n  - gt - igt - cgt - ge - ige - cge\n  - lt - ilt - clt - le - ile - cle\n  - like - ilike - clike - notlike - inotlike - cnotlike\n  - match - imatch - cmatch - notmatch - inotmatch - cnotmatch\n  - contains - icontains - ccontains - notcontains - inotcontains - cnotcontains\n  - replace - ireplace - creplace\n  - band - bor - bxor\n  - and - or - xor\n\n# Punctuation\n  ()[] { } , : ` = ; .\n\n# Keywords\nelseif begin function for foreach return else trap while do data dynamicparam\nuntil end break if throw param continue finally in switch exit filter from try\nprocess catch\n\n# Built-in variables\n$$ $? $^ $_\n$args $ConfirmPreference $ConsoleFileName $DebugPreference $Error\n$ErrorActionPreference $ErrorView $ExecutionContext $false $FormatEnumerationLimit\n$HOME $Host $input $MaximumAliasCount $MaximumDriveCount $MaximumErrorCount\n$MaximumFunctionCount $MaximumHistoryCount $MaximumVariableCount $MyInvocation\n$NestedPromptLevel $null $OutputEncoding $PID $PROFILE $ProgressPreference\n$PSBoundParameters $PSCommandPath $PSCulture $PSDefaultParameterValues\n$PSEmailServer $PSHOME $PSScriptRoot $PSSessionApplicationName\n$PSSessionConfigurationName $PSSessionOption $PSUICulture $PSVersionTable $PWD\n$ShellId $StackTrace $true $VerbosePreference $WarningPreference $WhatIfPreference\n$true $false $null\n\n# Built-in functions\nA:\nAdd-Computer Add-Content Add-History Add-Member Add-PSSnapin Add-Type\nB:\nC:\nCheckpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item\nClear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession\nConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData\nConvert-Path ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString\nConvertTo-Xml Copy-Item Copy-ItemProperty\nD:\nDebug-Process Disable-ComputerRestore Disable-PSBreakpoint Disable-PSRemoting\nDisable-PSSessionConfiguration Disconnect-PSSession\nE:\nEnable-ComputerRestore Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration\nEnter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter\nExport-Csv Export-FormatData Export-ModuleMember Export-PSSession\nF:\nForEach-Object Format-Custom Format-List Format-Table Format-Wide\nG:\nGet-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint\nGet-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date\nGet-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Help\nGet-History Get-Host Get-HotFix Get-Item Get-ItemProperty Get-Job Get-Location Get-Member\nGet-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive\nGet-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-Service\nGet-TraceSource Get-Transaction Get-TypeData Get-UICulture  Get-Unique Get-Variable Get-Verb\nGet-WinEvent Get-WmiObject Group-Object\nH:\nhelp\nI:\nImport-Alias Import-Clixml Import-Counter Import-Csv Import-LocalizedData Import-Module\nImport-PSSession ImportSystemModules Invoke-Command Invoke-Expression Invoke-History\nInvoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod\nJ:\nJoin-Path\nK:\nL:\nLimit-EventLog\nM:\nMeasure-Command Measure-Object mkdir more Move-Item Move-ItemProperty\nN:\nNew-Alias New-Event New-EventLog New-Item New-ItemProperty New-Module New-ModuleManifest\nNew-Object New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption\nNew-PSTransportOption New-Service New-TimeSpan New-Variable New-WebServiceProxy\nNew-WinEvent\nO:\noss Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String\nP:\nPause Pop-Location prompt Push-Location\nQ:\nR:\nRead-Host Receive-Job Receive-PSSession Register-EngineEvent Register-ObjectEvent\nRegister-PSSessionConfiguration Register-WmiEvent Remove-Computer Remove-Event\nRemove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-Module\nRemove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData\nRemove-Variable Remove-WmiObject Rename-Computer Rename-Item Rename-ItemProperty\nReset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service\nRestore-Computer Resume-Job Resume-Service\nS:\nSave-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias\nSet-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item\nSet-ItemProperty Set-Location Set-PSBreakpoint Set-PSDebug\nSet-PSSessionConfiguration Set-Service Set-StrictMode Set-TraceSource Set-Variable\nSet-WmiInstance Show-Command Show-ControlPanelItem Show-EventLog Sort-Object\nSplit-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction\nStart-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript\nSuspend-Job Suspend-Service\nT:\nTabExpansion2 Tee-Object Test-ComputerSecureChannel Test-Connection\nTest-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command\nU:\nUnblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration\nUpdate-FormatData Update-Help Update-List Update-TypeData Use-Transaction\nV:\nW:\nWait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog\nWrite-Host Write-Output Write-Progress Write-Verbose Write-Warning\nX:\nY:\nZ:\n'}}]);
//# sourceMappingURL=567.136f8e4b.chunk.js.map