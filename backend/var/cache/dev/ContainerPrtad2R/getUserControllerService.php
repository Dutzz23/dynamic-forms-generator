<?php

namespace ContainerPrtad2R;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getUserControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'App\Controller\UserController' shared autowired service.
     *
     * @return \App\Controller\UserController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/framework-bundle/Controller/AbstractController.php';
        include_once \dirname(__DIR__, 4).'/src/Controller/UserController.php';
        include_once \dirname(__DIR__, 4).'/src/Service/UserService.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/password-hasher/Hasher/UserPasswordHasherInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/password-hasher/Hasher/UserPasswordHasher.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/security-core/Security.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/security-bundle/Security.php';
        include_once \dirname(__DIR__, 4).'/src/Lib/ObjectUpdater.php';

        $a = ($container->services['doctrine'] ?? $container->load('getDoctrineService'));

        $container->services['App\\Controller\\UserController'] = $instance = new \App\Controller\UserController(new \App\Service\UserService(($container->privates['App\\Repository\\UserRepository'] ?? $container->load('getUserRepositoryService')), new \Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher(($container->privates['security.password_hasher_factory'] ?? $container->load('getSecurity_PasswordHasherFactoryService'))), $a, new \Symfony\Bundle\SecurityBundle\Security(new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'request_stack' => ['services', 'request_stack', 'getRequestStackService', false],
            'security.authenticator.managers_locator' => ['privates', 'security.authenticator.managers_locator', 'getSecurity_Authenticator_ManagersLocatorService', true],
            'security.authorization_checker' => ['privates', 'security.authorization_checker', 'getSecurity_AuthorizationCheckerService', false],
            'security.csrf.token_manager' => ['privates', 'security.csrf.token_manager', 'getSecurity_Csrf_TokenManagerService', true],
            'security.firewall.event_dispatcher_locator' => ['privates', 'security.firewall.event_dispatcher_locator', 'getSecurity_Firewall_EventDispatcherLocatorService', true],
            'security.firewall.map' => ['privates', 'security.firewall.map', 'getSecurity_Firewall_MapService', false],
            'security.token_storage' => ['privates', 'security.token_storage', 'getSecurity_TokenStorageService', false],
            'security.user_checker' => ['privates', 'security.user_checker', 'getSecurity_UserCheckerService', true],
        ], [
            'request_stack' => '?',
            'security.authenticator.managers_locator' => '?',
            'security.authorization_checker' => '?',
            'security.csrf.token_manager' => '?',
            'security.firewall.event_dispatcher_locator' => '?',
            'security.firewall.map' => '?',
            'security.token_storage' => '?',
            'security.user_checker' => '?',
        ]), ['dev' => NULL, 'login' => new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'security.authenticator.json_login.login' => ['privates', 'security.authenticator.json_login.login', 'getSecurity_Authenticator_JsonLogin_LoginService', true],
        ], [
            'security.authenticator.json_login.login' => '?',
        ]), 'api' => new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'security.authenticator.jwt.api' => ['privates', 'security.authenticator.jwt.api', 'getSecurity_Authenticator_Jwt_ApiService', true],
        ], [
            'security.authenticator.jwt.api' => '?',
        ])])), new \App\Lib\ObjectUpdater($a, ($container->privates['property_accessor'] ?? $container->load('getPropertyAccessorService'))));

        $instance->setContainer(($container->privates['.service_locator.O2p6Lk7'] ?? $container->load('get_ServiceLocator_O2p6Lk7Service'))->withContext('App\\Controller\\UserController', $container));

        return $instance;
    }
}
